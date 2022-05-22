import { isDefined } from "./guards";

type IndexIdType = number;

/**
 * Multi Index Map data structure
 *
 * @class NIndexMap
 * @template DataType
 * @template IndexedProp
 * @template DataPropValue
 */
class NIndexMap<DataType, IndexedProp extends keyof DataType> {
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
     * Creates an instance of NIndexMap.
     *
     * @param {IndexedProp[]} [indexKeys=[]] optional array of keys on the target object to index.
     * @param {DataType[]} [initialData=[]] optional array of initial data objects to store.
     */
    public constructor(indexKeys: IndexedProp[] = [], initialData: DataType[] = []) {
        this.indexMap = new Map(indexKeys.map((index) => [index, new Map()]));
        this.dataMap = new Map(initialData.map((data, index): [IndexIdType, DataType] => [index, data]));

        this.seedIndexMap(...indexKeys);
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
     * Adds one or more elements to the NIndexMap store.
     *
     * @template T
     * @param {...T[]} dataItems
     */
    public set<T extends DataType>(...dataItems: T[]): void {
        for (const dataItem of dataItems) {
            const newDataIndexId = this.dataMap.size;
            this.dataMap.set(newDataIndexId, dataItem);
            for (const indexMapItem of this.indexMap) {
                indexMapItem[1].set(dataItem[indexMapItem[0]], newDataIndexId);
            }
        }
    }

    /**
     * Removes the element from the NIndexMap store that matches the
     * specified key and value provided.
     *
     * @param {IndexedProp} key
     * @param {DataType[IndexedProp]} value
     */
    public delete(key: IndexedProp, value: DataType[IndexedProp]): void {
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
                    return;
                }
            }
        }

        for (const [indexId, dataItem] of this.dataMap) {
            if (dataItem[key] === value) {
                this.dataMap.delete(indexId);
            }
        }
    }

    /**
     * Adds new index to maintain for all currently and future added elements.
     *
     * @param {IndexedProp} key
     */
    public addIndex(key: IndexedProp): void {
        if (!this.indexMap.has(key)) {
            this.seedIndexMap(key);
        }
    }

    /**
     * Removes an exising index.
     *
     * @param {IndexedProp} key
     */
    public removeIndex(key: IndexedProp): void {
        if (this.indexMap.has(key)) {
            this.indexMap.delete(key);
        }
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
     * @returns {*}  {void}
     */
    public clear(): void {
        this.dataMap.clear();
        this.indexMap.clear();
    }

    private seedIndexMap(...indexProps: IndexedProp[]) {
        for (const indexProp of indexProps) {
            const map = new Map<DataType[IndexedProp], number>();
            for (const [index, dataItem] of this.dataMap) {
                map.set(dataItem[indexProp], index);
            }
            this.indexMap.set(indexProp, map);
        }
    }
}

export default NIndexMap;
