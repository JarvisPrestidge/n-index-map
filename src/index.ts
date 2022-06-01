import { isDefined, isNumber, isObject, isString } from "./guards";

type IndexIdType = number;

/**
 * Multi Index Map data structure
 *
 * @class NIndexMap
 * @template DataType
 * @template IndexedProp
 * @template DataPropValue
 */
class NIndexMap<DataType extends object, IndexedProp extends keyof DataType> {
    /**
     * Main data element mapping
     *
     * @private
     * @type {Map<IndexIdType, DataType>}
     */
    private readonly dataMap: Map<IndexIdType, DataType>;

    /**
     * Indexed property mapping
     *
     * @private
     * @type {Map<IndexedProp, Map<DataType[keyof DataType], number>>}
     */
    private readonly indexMap: Map<IndexedProp, Map<DataType[IndexedProp], number>> = new Map();

    /**
     * The default data to return if specified
     *
     * @private
     * @type {(DataType | undefined)}
     */
    private default: DataType | undefined;

    /**
     * Creates an instance of NIndexMap.
     *
     * @param {IndexedProp[]} [indexKeys=[]] optional array of keys on the target object to index.
     * @param {DataType[]} [initialData=[]] optional array of initial data objects to store.
     * @param {DataType} [defaultData] optional data item to return as default
     */
    public constructor(indexKeys: IndexedProp[] = [], initialData: DataType[] = [], defaultData?: DataType) {
        this.indexMap = new Map(
            indexKeys.map((indexKey) => {
                if (!isString(indexKey) && !isNumber(indexKey)) {
                    throw new Error("[N-INDEX-MAP ERROR] index key must be a string or number");
                }
                return [indexKey, new Map()];
            })
        );
        this.dataMap = new Map(
            initialData.map((data, index): [IndexIdType, DataType] => {
                if (!isObject(data)) {
                    throw new Error("[N-INDEX-MAP ERROR] cannot set item as it is not an object");
                }
                return [index, data];
            })
        );

        this.seedIndexMap(...indexKeys);

        this.default = defaultData;
    }

    /**
     * Returns a boolean indicating whether an element with the specified
     * combination of indexed key and value exists or not.
     *
     * @param {IndexedProp} key
     * @param {DataPropValue} value
     * @returns {*}  {boolean}
     */
    public has(key: IndexedProp, value: DataType[IndexedProp]): boolean {
        const indexPropertyMap = this.indexMap.get(key);
        if (isDefined(indexPropertyMap)) {
            return indexPropertyMap.has(value);
        }
        return [...this.dataMap.values()].some((dataItem) => dataItem[key] === value);
    }

    /**
     * Returns a element with the specified key and value (indexed or not) if it
     * exits in the store.
     *
     * @template NarrowProp
     * @param {NarrowProp} key
     * @param {DataType[NarrowProp]} value
     * @returns {*}  {(DataType | undefined)}
     */
    public get<NarrowProp extends IndexedProp>(key: NarrowProp, value: DataType[NarrowProp]): DataType | undefined {
        const indexPropertyMap = this.indexMap.get(key);
        if (isDefined(indexPropertyMap)) {
            const dataMapIndexId = indexPropertyMap.get(value);
            if (isDefined(dataMapIndexId)) {
                return this.dataMap.get(dataMapIndexId);
            }
        }
        return [...this.dataMap.values()].find((dataItem) => dataItem[key] === value);
    }

    /**
     * Returns a element with the specified key and value (indexed or not) if it
     * exits in the store, otherwise returns the default value when specified.
     *
     * @template NarrowProp
     * @param {NarrowProp} key
     * @param {DataType[NarrowProp]} value
     * @returns {*}  {(DataType | undefined)}
     */
    public getOrDefault<NarrowProp extends IndexedProp>(
        key: NarrowProp,
        value: DataType[NarrowProp]
    ): DataType | undefined {
        return this.get(key, value) ?? this.default;
    }

    /**
     * Return default value if specified
     *
     * @returns {*}  {(DataType | undefined)}
     */
    public getDefault(): DataType | undefined {
        return this.default;
    }

    /**
     * Adds one or more elements to the NIndexMap store.
     *
     * @template T
     * @param {...T[]} dataItems
     * @returns {*}  {this}
     */
    public set<T extends DataType>(...dataItems: T[]): this {
        for (const dataItem of dataItems) {
            this.validateDataItem(dataItem);
            const newDataIndexId = this.dataMap.size;
            this.dataMap.set(newDataIndexId, dataItem);
            for (const [indexedProperty, indexPropertyMap] of this.indexMap) {
                indexPropertyMap.set(dataItem[indexedProperty], newDataIndexId);
            }
        }
        return this;
    }

    /**
     * Set the default value to return
     *
     * @param {DataType} dataItem
     * @returns {*}  {this}
     */
    public setDefault(dataItem: DataType): this {
        if (!isObject(dataItem)) {
            throw new Error("[N-INDEX-MAP ERROR] cannot set item as it is not an object");
        }
        this.default = dataItem;
        return this;
    }

    /**
     * Removes the element from the NIndexMap store that matches the
     * specified key and value provided.
     *
     * @param {IndexedProp} key
     * @param {DataType[IndexedProp]} value
     * @returns {*}  {this}
     */
    public delete(key: IndexedProp, value: DataType[IndexedProp]): this {
        const indexPropertyMap = this.indexMap.get(key);
        if (isDefined(indexPropertyMap)) {
            const dataMapIndexId = indexPropertyMap.get(value);
            if (isDefined(dataMapIndexId)) {
                const dataItem = this.dataMap.get(dataMapIndexId);
                if (isDefined(dataItem)) {
                    this.dataMap.delete(dataMapIndexId);
                    for (const [indexedProperty, indexPropertyMap] of this.indexMap) {
                        const dataPropertyValue = dataItem[indexedProperty];
                        indexPropertyMap.delete(dataPropertyValue);
                    }
                    return this;
                }
            }
        }

        for (const [indexId, dataItem] of this.dataMap) {
            if (dataItem[key] === value) {
                this.dataMap.delete(indexId);
            }
        }
        return this;
    }

    /**
     * Adds new index to maintain for all currently and future added elements.
     *
     * @param {IndexedProp} key
     * @returns {*}  {this}
     */
    public addIndex(key: IndexedProp): this {
        if (!this.indexMap.has(key)) {
            this.seedIndexMap(key);
        }
        return this;
    }

    /**
     * Removes an exising index.
     *
     * @param {IndexedProp} key
     * @returns {*}  {this}
     */
    public removeIndex(key: IndexedProp): this {
        if (this.indexMap.has(key)) {
            this.indexMap.delete(key);
        }
        return this;
    }

    /**
     * Returns the size of the NIndexMap.
     *
     * @returns {*}  {number}
     */
    public size(): number {
        return this.dataMap.size;
    }

    /**
     * Returns the size of the indexes maintained by the NIndexMap.
     *
     * @returns {*}  {number}
     */
    public indexes(): number {
        return this.indexMap.size;
    }

    /**
     * Returns a new iterator object that contains the values for each element
     * in the NIndexMap in insertion order.
     *
     * @returns {*}  {IterableIterator<DataType>}
     */
    public values(): IterableIterator<DataType> {
        return this.dataMap.values();
    }

    /**
     * Returns a new iterator object that contains the [key, value] pairs for
     * each element in the NIndexMap in insertion order. In this particular
     * case, this iterator object is also an iterable, so the for-of loop can be
     * used.
     *
     * @returns {*}  {IterableIterator<[number, DataType]>}
     */
    public entries(): IterableIterator<[number, DataType]> {
        return this.dataMap.entries();
    }

    /**
     * Clears all elements and indexes from the NIndexMap.
     *
     * @returns {*}  {this}
     */
    public clear(): this {
        this.dataMap.clear();
        this.indexMap.clear();
        return this;
    }

    private seedIndexMap(...indexProperties: IndexedProp[]) {
        for (const indexProperty of indexProperties) {
            const map = new Map<DataType[IndexedProp], number>();
            for (const [index, dataItem] of this.dataMap) {
                if (!dataItem.hasOwnProperty(indexProperty)) {
                    throw new Error("[N-INDEX-MAP ERROR] cannot create index for property that does not exist on data");
                }
                map.set(dataItem[indexProperty], index);
            }
            this.indexMap.set(indexProperty, map);
        }
    }

    private validateDataItem(dataItem: DataType): void {
        if (!isObject(dataItem)) {
            throw new Error("[N-INDEX-MAP ERROR] cannot set item as it is not an object");
        }
        for (const indexedProperty of this.indexMap.keys()) {
            if (!dataItem.hasOwnProperty(indexedProperty)) {
                throw new Error("[N-INDEX-MAP ERROR] cannot set item as does not contain indexed properties");
            }
            if (this.has(indexedProperty, dataItem[indexedProperty])) {
                throw new Error("[N-INDEX-MAP ERROR] cannot set item as indexed prop values are not unique");
            }
        }
    }
}

export default NIndexMap;
