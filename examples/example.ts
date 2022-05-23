import NIndexMap from "../src/index";

interface TestInterface {
    stringId: string;
    numberId: number;
    data: string;
}

const initialData: TestInterface[] = [
    { stringId: "1", numberId: 1, data: "foo" },
    { stringId: "2", numberId: 2, data: "bar" },
    { stringId: "3", numberId: 3, data: "baz" }
];

const exampleMap = new NIndexMap(["stringId", "numberId"], initialData);

const fooElement = exampleMap.get("numberId", 1);
const barElement = exampleMap.get("stringId", "2");

// prints: {stringId: '1', numberId: 1, data: 'foo'}
console.log(fooElement);

// prints: {stringId: '2', numberId: 2, data: 'bar'}
console.log(barElement);
