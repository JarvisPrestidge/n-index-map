
<div align="center" id="top">


<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

  [![Version][version-shield]][version-url]
  [![Issues][issues-shield]][issues-url]
  [![Pulls][pulls-shield]][pulls-url]
  [![Codecov][codecov-shield]][codecov-url]
  [![MIT License][license-shield]][license-url]

</div>


<br />
<div align="center">

  ![header-dark](https://user-images.githubusercontent.com/6669336/169810148-d25bc084-c365-484f-bb54-088f6e122dc4.svg#gh-dark-mode-only)

  ![header-light](https://user-images.githubusercontent.com/6669336/169810362-1d7dffba-9ee5-4c74-891d-94480579fc0a.svg#gh-light-mode-only)


  <p align="center">
    A multi index map implementation in TypeScript
    <br />
    <br />
    <a href="https://github.com/JarvisPrestidge/n-index-map/issues">Report Bug</a>
    ·
    <a href="https://github.com/JarvisPrestidge/n-index-map/issues">Request Feature</a>
  </p>
</div>

<div align="center">

  <a href="https://www.typescriptlang.org/">
    <img src="https://user-images.githubusercontent.com/6669336/169691369-e95c9e02-f33a-40f6-89e4-3709d16440d5.svg" alt="Made with TypeScript">
  </a>

</div>

<br />

* ⚡ **Performant**
* 🔥 **Zero dependencies**
* 🎉 **First class typescript support**
* 📖 **Simple fluent API similar to native `map`**

<br/>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
      <li><a href="#installation">Installation</a></li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#api">API</a></li>
      <li><a href="#contributing">Contributing</a></li>
      <li><a href="#license">License</a></li>
      <li><a href="#contact">Contact</a></li>
  </ol>
</details>



## 💾 Installation

```bash
$ yarn add n-index-map
```

```bash
$ npm install n-index-map
```

<p align="right">(<a href="#top">back to top</a>)</p>

## 🔨 Usage

Import the default `NIndexMap` export and instantiate a new instance. 

#### Constructor

You can optionally pass an array of indexes and/or an array of initial data into the constructor, in which case NIndexMap will use those index keys to cache all inital and future data set on the instance. Otherwise, NIndexMap will behave similarly to native map, that is until you to decide to add an index. 

```typescript
import NIndexMap from "n-index-map";

interface TestInterface {
    stringId: string;
    numberId: number;
    data: string;
}

const initialData: TestInterface[] = [
    { stringId: "1", numberId: 1, data: "foo" },
    { stringId: "2", numberId: 2, data: "bar" },
];

const exampleMap = new NIndexMap(["stringId", "numberId"], initialData);

const fooElement = exampleMap.get("numberId", 1);
const barElement = exampleMap.get("stringId", "2");

// prints: {stringId: '1', numberId: 1, data: 'foo'}
console.log(fooElement);

// prints: {stringId: '2', numberId: 2, data: 'bar'}
console.log(barElement);
```

#### Typing
You have the option to specify the types of the data you expect `NIndexMap` to handle, along with the index keys when calling the constructor as generic type paramaters.

> **NOTE**:  This is automatically inferred from the params if provided, but of course, without constructor params this will need to be specified for full type support.

```typescript
const exampleWithoutArgs = new NIndexMap<TestInterface, "stringId" | "numberId">();

// correct type support for parameters
const fooElement = exampleWithoutArgs.get("numberId", 1);
const barElement = exampleWithoutArgs.get("stringId", "2");

// prints: {stringId: '1', numberId: 1, data: 'foo'}
console.log(fooElement);

// prints: {stringId: '2', numberId: 2, data: 'bar'}
console.log(barElement);
...
```

<p align="right">(<a href="#top">back to top</a>)</p>

## 📖 API

### new
```typescript 
constructor(indexKeys: IndexedProp[] = [], initialData: DataType[] = []): NIndexMap
```
Creates a new instance of NIndexMap.

### has
```typescript 
has(key: IndexedProp, value: DataType[IndexedProp]): boolean
```
Returns a boolean indicating whether an element with the specified combination of indexed key and value exists or not.

### get
```typescript 
get(key: IndexedProp, value: DataType[IndexedProp]): DataType | undefined
```
> Returns a element with the specified key and value (indexed or not) if it exists in the store.

### getOrDefault
```typescript 
getOrDefault(key: IndexedProp, value: DataType[IndexedProp]): DataType | undefined
```
> Returns a element with the specified key and value (indexed or not) if it exists in the store, otherwise returns the default value when specified.

### getDefault
```typescript 
getDefault(): DataType | undefined
```
> Return default value if specified

### set
```typescript 
set(...dataItems: DataType[]): this
```
Adds one or more elements to the NIndexMap store.

### setDefault
```typescript 
setDefault(dataItems: DataType): this
```
Adds one or more elements to the NIndexMap store.

### delete
```typescript 
delete(key: IndexedProp, value: DataType[IndexedProp]): this
```
Removes the element from the NIndexMap store that matches the specified key and value provided.

### addIndex
```typescript 
addIndex(key: IndexedProp): this
```
Adds new index to maintain for all currently and future added elements.

### removeIndex
```typescript 
removeIndex(key: IndexedProp): this
```
Removes an exising index.

### size
```typescript 
size(): number
```
Returns the size of the NIndexMap.


### indexes
```typescript 
indexes(): number
```
Returns the size of the indexes maintained by the NIndexMap.


### values
```typescript 
values(): IterableIterator<DataType>
```
Returns a new iterator object that contains the values for each element in the NIndexMap in insertion order.

### indexes
```typescript 
entries(): IterableIterator<[number, DataType]>
```
Returns a new iterator object that contains the [key, value] pairs for each element in the NIndexMap in insertion order. In this particular case, this iterator object is also an iterable, so the for-of loop can be used.


### indexes
```typescript 
clear(): void
```
Clears all elements and indexes from the NIndexMap.

<p align="right">(<a href="#top">back to top</a>)</p>


## ❤️ Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. 
Don't forget to give the project a star! Thanks again!

### Tooling
* [Changeset](https://github.com/atlassian/changesets) for changes to documentation, changelog generation, and release management.

### Making a Pull Request

1. Fork the project and clone your fork:
```bash
gh repo fork --clone
```
2. Create your feature branch: 
```bash
git checkout -b feature/AmazingFeature
```
3. Commit your changes: 
```bash
git commit -m 'Add some AmazingFeature'
```
4. Use the changeset cli to create a detailed description of your changes.
```bash
yarn changeset
``` 
> This will be used to generate a changelog when we publish an update. [Learn more about Changeset](https://github.com/atlassian/changesets/tree/master/packages/cli).

5. Push branch and open a Pull Request
```bash
gh pr create
```

<p align="right">(<a href="#top">back to top</a>)</p>


## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



## 📫 Contact

Jarvis Prestidge - jarvisprestidge@gmail.com

Project Link: [https://github.com/jarvisprestidge/n-index-map](https://github.com/jarvisprestidge/n-index-map)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[typescript-shield]:https://img.shields.io/badge/made%20with-typescript-%23007ACC?style=for-the-badge&link=https://www.typescriptlang.org "TypeScript (External Link)"
[issues-shield]: https://img.shields.io/github/issues/JarvisPrestidge/n-index-map.svg?style=for-the-badge
[issues-url]: https://github.com/JarvisPrestidge/n-index-map/issues
[pulls-shield]: https://img.shields.io/github/issues-pr/JarvisPrestidge/n-index-map.svg?style=for-the-badge
[pulls-url]: https://github.com/JarvisPrestidge/n-index-map/pulls
[license-shield]: https://img.shields.io/github/license/JarvisPrestidge/n-index-map.svg?style=for-the-badge
[license-url]: https://github.com/JarvisPrestidge/n-index-map/blob/master/LICENSE.txt
[codecov-shield]: https://img.shields.io/codecov/c/gh/JarvisPrestidge/multi-index-map?style=for-the-badge
[codecov-url]: https://app.codecov.io/gh/JarvisPrestidge/multi-index-map
[version-shield]: https://img.shields.io/github/package-json/v/jarvisprestidge/n-index-map?style=for-the-badge
[version-url]: https://www.npmjs.com/package/n-index-map