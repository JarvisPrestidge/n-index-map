import NIndexMap from "../src/index";
import { createMock } from "ts-auto-mock";

interface TestInterface {
    stringId: string;
    numberId: number;
    objectId?: object;
    data1: string;
    data2: number;
    data3?: object;
}

const stringIndex = "stringId";
const numberIndex = "numberId";
const objectIndex = "objectId";

describe("NIndexMap", () => {
    let mock1: TestInterface;
    let mock2: TestInterface;
    let mock3: TestInterface;

    beforeEach(() => {
        mock1 = createMock<TestInterface>();
        mock2 = createMock<TestInterface>();
        mock3 = createMock<TestInterface>();
    });

    it("call constructor (infer typing), load data, and fetch result via string index", () => {
        const sut = new NIndexMap([stringIndex], [mock1, mock2, mock3]);
        const resMock1 = sut.get(stringIndex, mock1.stringId);
        const resMock2 = sut.get(stringIndex, mock2.stringId);
        const resMock3 = sut.get(stringIndex, mock3.stringId);
        expect(resMock1).toEqual(mock1);
        expect(resMock2).toEqual(mock2);
        expect(resMock3).toEqual(mock3);
    });

    it("call constructor (explicit typing), load data, and fetch result via different indexes", () => {
        const sut = new NIndexMap<TestInterface, "stringId" | "numberId" | "objectId">(
            [stringIndex, numberIndex, objectIndex],
            [mock1, mock2, mock3]
        );
        const resMock1 = sut.get(stringIndex, mock1.stringId);
        const resMock2 = sut.get(numberIndex, mock2.numberId);
        const resMock3 = sut.get(objectIndex, mock3.objectId);
        expect(resMock1).toEqual(mock1);
        expect(resMock2).toEqual(mock2);
        expect(resMock3).toEqual(mock3);
    });

    it("call constructor (explicit typing), load data, and iterate over entries", () => {
        const sut = new NIndexMap<TestInterface, "stringId">([stringIndex], [mock1, mock2, mock3]);
        const entries = sut.entries();
        expect([...entries].length).toEqual(3);
        for (const [index, mock] of entries) {
            expect(mock).toMatchObject(createMock<TestInterface>());
        }
    });

    it("call constructor (explicit typing), load data, and iterate over values", () => {
        const sut = new NIndexMap<TestInterface, "stringId">([stringIndex], [mock1, mock2, mock3]);
        const values = sut.values();
        expect([...values].length).toEqual(3);
        for (const mock of values) {
            expect(mock).toMatchObject(createMock<TestInterface>());
        }
    });

    it("call constructor without arguments, load data, and fetch expected result", () => {
        const sut = new NIndexMap<TestInterface, "stringId">();
        sut.set(mock1);
        sut.set(mock2);
        sut.set(mock3);
        const res = sut.get(stringIndex, mock1.stringId);
        expect(res).toEqual(mock1);
    });

    it("add index", () => {
        const sut = new NIndexMap<TestInterface, "stringId">();
        sut.set(mock1);
        sut.set(mock2);
        sut.set(mock3);
        sut.addIndex(stringIndex);
        const res = sut.get(stringIndex, mock1.stringId);
        expect(res).toEqual(mock1);
    });

    it("remove index", () => {
        const sut = new NIndexMap<TestInterface, "stringId">();
        sut.set(mock1);
        sut.set(mock2);
        sut.set(mock3);
        sut.addIndex(stringIndex);
        sut.removeIndex(stringIndex);
        const res = sut.get(stringIndex, mock1.stringId);
        expect(res).toEqual(mock1);
    });

    it("remove index that doesn't exist", () => {
        const sut = new NIndexMap<TestInterface, "stringId">();
        sut.set(mock1);
        sut.set(mock2);
        sut.set(mock3);
        sut.removeIndex(stringIndex);
        const res = sut.get(stringIndex, mock1.stringId);
        expect(res).toEqual(mock1);
    });

    it("store duplicate data", () => {
        const sut = new NIndexMap<TestInterface, "stringId">();
        sut.set(mock1);
        sut.set(mock1);
        sut.addIndex(stringIndex);
        const res = sut.get(stringIndex, mock1.stringId);
        expect(res).toEqual(mock1);
        expect(sut.size()).toEqual(2);
    });

    it("clear data and indexes", () => {
        const sut = new NIndexMap<TestInterface, "stringId">();
        sut.set(mock1);
        sut.set(mock2);
        sut.addIndex(stringIndex);
        sut.clear();
        const res = sut.get(stringIndex, mock1.stringId);
        expect(res).toBeUndefined();
        expect(sut.size()).toEqual(0);
        expect(sut.indexes()).toEqual(0);
    });

    it("has data", () => {
        const sut = new NIndexMap([stringIndex, numberIndex, objectIndex], [mock1, mock2, mock3]);
        const hasMock1 = sut.has(stringIndex, mock1.stringId);
        const hasMock2 = sut.has(numberIndex, mock2.numberId);
        const hasMock3 = sut.has(objectIndex, mock3.objectId);
        const shouldNotExist = sut.has(stringIndex, "fail");
        expect(hasMock1).toBeTruthy();
        expect(hasMock2).toBeTruthy();
        expect(hasMock3).toBeTruthy();
        expect(shouldNotExist).toBeFalsy();
    });

    it("has data without indexes", () => {
        const sut = new NIndexMap<TestInterface, "stringId" | "numberId" | "objectId">();
        sut.set(mock1);
        sut.set(mock2);
        sut.set(mock3);
        const hasMock1 = sut.has(stringIndex, mock1.stringId);
        const hasMock2 = sut.has(numberIndex, mock2.numberId);
        const hasMock3 = sut.has(objectIndex, mock3.objectId);
        const shouldNotExist = sut.has(stringIndex, "fail");
        expect(hasMock1).toBeTruthy();
        expect(hasMock2).toBeTruthy();
        expect(hasMock3).toBeTruthy();
        expect(shouldNotExist).toBeFalsy();
    });

    it("set data", () => {
        const sut = new NIndexMap([stringIndex, numberIndex, objectIndex], [mock1, mock2, mock3]);
        const mock = createMock<TestInterface>();
        sut.set(mock);
        const hasMockStringIndex = sut.has(stringIndex, mock.stringId);
        const hasMockNumberIndex = sut.has(numberIndex, mock.numberId);
        const hasMockObjectIndex = sut.has(objectIndex, mock.objectId);
        expect(hasMockStringIndex).toBeTruthy();
        expect(hasMockNumberIndex).toBeTruthy();
        expect(hasMockObjectIndex).toBeTruthy();
    });

    it("delete data", () => {
        const sut = new NIndexMap([stringIndex, numberIndex, objectIndex], [mock1, mock2, mock3]);
        sut.delete(stringIndex, mock1.stringId);
        expect(sut.size()).toEqual(2);
        sut.delete(numberIndex, mock2.numberId);
        expect(sut.size()).toEqual(1);
        sut.delete(objectIndex, mock3.objectId);
        expect(sut.size()).toEqual(0);
    });

    it("delete data without indexes", () => {
        const sut = new NIndexMap<TestInterface, "stringId" | "numberId" | "objectId">();
        sut.set(mock1);
        sut.set(mock2);
        sut.set(mock3);
        sut.delete(stringIndex, mock1.stringId);
        expect(sut.size()).toEqual(2);
        sut.delete(numberIndex, mock2.numberId);
        expect(sut.size()).toEqual(1);
        sut.delete(objectIndex, mock3.objectId);
        expect(sut.size()).toEqual(0);
    });
});
