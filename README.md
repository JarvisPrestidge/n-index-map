
<div id="top"></div>


<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Pulls][pulls-shield]][pulls-url]
[![MIT License][license-shield]][license-url]



<br />
<div align="center">
  <h1 align="center">multi-key-map</h1>

  <p align="center">
    A multi key map implmenation in TypeScript
    <br />
    <br />
    <a href="https://github.com/JarvisPrestidge/multi-key-map/issues">Report Bug</a>
    ·
    <a href="https://github.com/JarvisPrestidge/multi-key-map/issues">Request Feature</a>
  </p>
</div>

<div align="center">


<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDkuNDUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAyNDkuNDUgMzUiPjxyZWN0IGNsYXNzPSJzdmdfX3JlY3QiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMTUuMzEiIGhlaWdodD0iMzUiIGZpbGw9IiMzMUM0RjMiLz48cmVjdCBjbGFzcz0ic3ZnX19yZWN0IiB4PSIxMTMuMzEiIHk9IjAiIHdpZHRoPSIxMzYuMTQiIGhlaWdodD0iMzUiIGZpbGw9IiMwMDdBQ0MiLz48cGF0aCBjbGFzcz0ic3ZnX190ZXh0IiBkPSJNMTUuNjkgMjJMMTQuMjIgMjJMMTQuMjIgMTMuNDdMMTYuMTQgMTMuNDdMMTguNjAgMjAuMDFMMjEuMDYgMTMuNDdMMjIuOTcgMTMuNDdMMjIuOTcgMjJMMjEuNDkgMjJMMjEuNDkgMTkuMTlMMjEuNjQgMTUuNDNMMTkuMTIgMjJMMTguMDYgMjJMMTUuNTUgMTUuNDNMMTUuNjkgMTkuMTlMMTUuNjkgMjJaTTI4LjQ5IDIyTDI2Ljk1IDIyTDMwLjE3IDEzLjQ3TDMxLjUwIDEzLjQ3TDM0LjczIDIyTDMzLjE4IDIyTDMyLjQ5IDIwLjAxTDI5LjE4IDIwLjAxTDI4LjQ5IDIyWk0zMC44MyAxNS4yOEwyOS42MCAxOC44MkwzMi4wNyAxOC44MkwzMC44MyAxNS4yOFpNNDEuMTQgMjJMMzguNjkgMjJMMzguNjkgMTMuNDdMNDEuMjEgMTMuNDdRNDIuMzQgMTMuNDcgNDMuMjEgMTMuOTdRNDQuMDkgMTQuNDggNDQuNTcgMTUuNDBRNDUuMDUgMTYuMzMgNDUuMDUgMTcuNTJMNDUuMDUgMTcuNTJMNDUuMDUgMTcuOTVRNDUuMDUgMTkuMTYgNDQuNTcgMjAuMDhRNDQuMDggMjEuMDAgNDMuMTkgMjEuNTBRNDIuMzAgMjIgNDEuMTQgMjJMNDEuMTQgMjJaTTQwLjE3IDE0LjY2TDQwLjE3IDIwLjgyTDQxLjE0IDIwLjgyUTQyLjMwIDIwLjgyIDQyLjkzIDIwLjA5UTQzLjU1IDE5LjM2IDQzLjU2IDE3Ljk5TDQzLjU2IDE3Ljk5TDQzLjU2IDE3LjUyUTQzLjU2IDE2LjEzIDQyLjk2IDE1LjQwUTQyLjM1IDE0LjY2IDQxLjIxIDE0LjY2TDQxLjIxIDE0LjY2TDQwLjE3IDE0LjY2Wk01NS4wOSAyMkw0OS41MSAyMkw0OS41MSAxMy40N0w1NS4wNSAxMy40N0w1NS4wNSAxNC42Nkw1MS4wMCAxNC42Nkw1MS4wMCAxNy4wMkw1NC41MCAxNy4wMkw1NC41MCAxOC4xOUw1MS4wMCAxOC4xOUw1MS4wMCAyMC44Mkw1NS4wOSAyMC44Mkw1NS4wOSAyMlpNNjYuNjUgMjJMNjQuNjggMTMuNDdMNjYuMTUgMTMuNDdMNjcuNDcgMTkuODhMNjkuMTAgMTMuNDdMNzAuMzQgMTMuNDdMNzEuOTYgMTkuODlMNzMuMjcgMTMuNDdMNzQuNzQgMTMuNDdMNzIuNzcgMjJMNzEuMzUgMjJMNjkuNzMgMTUuNzdMNjguMDcgMjJMNjYuNjUgMjJaTTgwLjM4IDIyTDc4LjkwIDIyTDc4LjkwIDEzLjQ3TDgwLjM4IDEzLjQ3TDgwLjM4IDIyWk04Ni44NyAxNC42Nkw4NC4yMyAxNC42Nkw4NC4yMyAxMy40N0w5MS4wMCAxMy40N0w5MS4wMCAxNC42Nkw4OC4zNCAxNC42Nkw4OC4zNCAyMkw4Ni44NyAyMkw4Ni44NyAxNC42NlpNOTYuMjQgMjJMOTQuNzUgMjJMOTQuNzUgMTMuNDdMOTYuMjQgMTMuNDdMOTYuMjQgMTcuMDJMMTAwLjA1IDE3LjAyTDEwMC4wNSAxMy40N0wxMDEuNTMgMTMuNDdMMTAxLjUzIDIyTDEwMC4wNSAyMkwxMDAuMDUgMTguMjFMOTYuMjQgMTguMjFMOTYuMjQgMjJaIiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggY2xhc3M9InN2Z19fdGV4dCIgZD0iTTEyOS4yOSAxNS40OEwxMjYuNzEgMTUuNDhMMTI2LjcxIDEzLjYwTDEzNC4yMyAxMy42MEwxMzQuMjMgMTUuNDhMMTMxLjY2IDE1LjQ4TDEzMS42NiAyMkwxMjkuMjkgMjJMMTI5LjI5IDE1LjQ4Wk0xNDAuNzMgMTguOTVMMTM3LjUyIDEzLjYwTDE0MC4wMyAxMy42MEwxNDIuMDIgMTYuOTRMMTQ0LjAyIDEzLjYwTDE0Ni4zMiAxMy42MEwxNDMuMTAgMTguOTlMMTQzLjEwIDIyTDE0MC43MyAyMkwxNDAuNzMgMTguOTVaTTE1Mi43OCAyMkwxNTAuNDAgMjJMMTUwLjQwIDEzLjYwTDE1NC4yNSAxMy42MFExNTUuMzggMTMuNjAgMTU2LjIyIDEzLjk4UTE1Ny4wNiAxNC4zNSAxNTcuNTIgMTUuMDZRMTU3Ljk4IDE1Ljc2IDE1Ny45OCAxNi43MUwxNTcuOTggMTYuNzFRMTU3Ljk4IDE3LjY2IDE1Ny41MiAxOC4zNVExNTcuMDYgMTkuMDUgMTU2LjIyIDE5LjQyUTE1NS4zOCAxOS44MCAxNTQuMjUgMTkuODBMMTU0LjI1IDE5LjgwTDE1Mi43OCAxOS44MEwxNTIuNzggMjJaTTE1Mi43OCAxNS40N0wxNTIuNzggMTcuOTNMMTU0LjEwIDE3LjkzUTE1NC44MyAxNy45MyAxNTUuMjAgMTcuNjFRMTU1LjU4IDE3LjI5IDE1NS41OCAxNi43MUwxNTUuNTggMTYuNzFRMTU1LjU4IDE2LjEyIDE1NS4yMCAxNS44MFExNTQuODMgMTUuNDcgMTU0LjEwIDE1LjQ3TDE1NC4xMCAxNS40N0wxNTIuNzggMTUuNDdaTTE2OS40NyAyMkwxNjIuNzMgMjJMMTYyLjczIDEzLjYwTDE2OS4zMiAxMy42MEwxNjkuMzIgMTUuNDRMMTY1LjA5IDE1LjQ0TDE2NS4wOSAxNi44NUwxNjguODIgMTYuODVMMTY4LjgyIDE4LjYzTDE2NS4wOSAxOC42M0wxNjUuMDkgMjAuMTdMMTY5LjQ3IDIwLjE3TDE2OS40NyAyMlpNMTczLjY5IDIxLjI0TDE3My42OSAyMS4yNEwxNzQuNDcgMTkuNDlRMTc1LjAzIDE5Ljg2IDE3NS43OCAyMC4wOVExNzYuNTIgMjAuMzIgMTc3LjI0IDIwLjMyTDE3Ny4yNCAyMC4zMlExNzguNjEgMjAuMzIgMTc4LjYyIDE5LjY0TDE3OC42MiAxOS42NFExNzguNjIgMTkuMjggMTc4LjIzIDE5LjExUTE3Ny44NCAxOC45MyAxNzYuOTcgMTguNzRMMTc2Ljk3IDE4Ljc0UTE3Ni4wMiAxOC41MyAxNzUuMzggMTguMzBRMTc0Ljc1IDE4LjA2IDE3NC4yOSAxNy41NVExNzMuODQgMTcuMDMgMTczLjg0IDE2LjE2TDE3My44NCAxNi4xNlExNzMuODQgMTUuMzkgMTc0LjI2IDE0Ljc3UTE3NC42OCAxNC4xNSAxNzUuNTEgMTMuNzlRMTc2LjM1IDEzLjQzIDE3Ny41NSAxMy40M0wxNzcuNTUgMTMuNDNRMTc4LjM4IDEzLjQzIDE3OS4xOSAxMy42MlExNzkuOTkgMTMuODAgMTgwLjYxIDE0LjE3TDE4MC42MSAxNC4xN0wxNzkuODcgMTUuOTNRMTc4LjY3IDE1LjI4IDE3Ny41NCAxNS4yOEwxNzcuNTQgMTUuMjhRMTc2LjgzIDE1LjI4IDE3Ni41MSAxNS40OVExNzYuMTkgMTUuNzAgMTc2LjE5IDE2LjA0TDE3Ni4xOSAxNi4wNFExNzYuMTkgMTYuMzcgMTc2LjU3IDE2LjU0UTE3Ni45NiAxNi43MSAxNzcuODEgMTYuODlMMTc3LjgxIDE2Ljg5UTE3OC43NyAxNy4xMCAxNzkuNDAgMTcuMzNRMTgwLjAzIDE3LjU2IDE4MC40OSAxOC4wN1ExODAuOTUgMTguNTggMTgwLjk1IDE5LjQ2TDE4MC45NSAxOS40NlExODAuOTUgMjAuMjEgMTgwLjUzIDIwLjgzUTE4MC4xMiAyMS40NCAxNzkuMjcgMjEuODBRMTc4LjQzIDIyLjE3IDE3Ny4yMyAyMi4xN0wxNzcuMjMgMjIuMTdRMTc2LjIxIDIyLjE3IDE3NS4yNSAyMS45MlExNzQuMjkgMjEuNjcgMTczLjY5IDIxLjI0Wk0xODUuMTAgMTcuODBMMTg1LjEwIDE3LjgwUTE4NS4xMCAxNi41NCAxODUuNzAgMTUuNTRRMTg2LjMwIDE0LjU1IDE4Ny4zNSAxMy45OVExODguNDAgMTMuNDMgMTg5LjcyIDEzLjQzTDE4OS43MiAxMy40M1ExOTAuODcgMTMuNDMgMTkxLjgwIDEzLjg0UTE5Mi43MiAxNC4yNSAxOTMuMzMgMTUuMDJMMTkzLjMzIDE1LjAyTDE5MS44MiAxNi4zOVExOTEuMDEgMTUuNDAgMTg5Ljg0IDE1LjQwTDE4OS44NCAxNS40MFExODkuMTYgMTUuNDAgMTg4LjYyIDE1LjcwUTE4OC4wOSAxNiAxODcuNzkgMTYuNTRRMTg3LjUwIDE3LjA5IDE4Ny41MCAxNy44MEwxODcuNTAgMTcuODBRMTg3LjUwIDE4LjUxIDE4Ny43OSAxOS4wNVExODguMDkgMTkuNjAgMTg4LjYyIDE5LjkwUTE4OS4xNiAyMC4yMCAxODkuODQgMjAuMjBMMTg5Ljg0IDIwLjIwUTE5MS4wMSAyMC4yMCAxOTEuODIgMTkuMjJMMTkxLjgyIDE5LjIyTDE5My4zMyAyMC41OFExOTIuNzIgMjEuMzUgMTkxLjgwIDIxLjc2UTE5MC44NyAyMi4xNyAxODkuNzIgMjIuMTdMMTg5LjcyIDIyLjE3UTE4OC40MCAyMi4xNyAxODcuMzUgMjEuNjFRMTg2LjMwIDIxLjA1IDE4NS43MCAyMC4wNVExODUuMTAgMTkuMDYgMTg1LjEwIDE3LjgwWk0yMDAuMjUgMjJMMTk3Ljg3IDIyTDE5Ny44NyAxMy42MEwyMDEuNzEgMTMuNjBRMjAyLjg2IDEzLjYwIDIwMy42OSAxMy45OFEyMDQuNTMgMTQuMzUgMjA0Ljk5IDE1LjA2UTIwNS40NSAxNS43NiAyMDUuNDUgMTYuNzFMMjA1LjQ1IDE2LjcxUTIwNS40NSAxNy42MiAyMDUuMDIgMTguMzBRMjA0LjU5IDE4Ljk4IDIwMy44MCAxOS4zNkwyMDMuODAgMTkuMzZMMjA1LjYxIDIyTDIwMy4wNyAyMkwyMDEuNTQgMTkuNzdMMjAwLjI1IDE5Ljc3TDIwMC4yNSAyMlpNMjAwLjI1IDE1LjQ3TDIwMC4yNSAxNy45M0wyMDEuNTcgMTcuOTNRMjAyLjMwIDE3LjkzIDIwMi42NyAxNy42MVEyMDMuMDQgMTcuMjkgMjAzLjA0IDE2LjcxTDIwMy4wNCAxNi43MVEyMDMuMDQgMTYuMTIgMjAyLjY3IDE1Ljc5UTIwMi4zMCAxNS40NyAyMDEuNTcgMTUuNDdMMjAxLjU3IDE1LjQ3TDIwMC4yNSAxNS40N1pNMjEyLjYxIDIyTDIxMC4yMyAyMkwyMTAuMjMgMTMuNjBMMjEyLjYxIDEzLjYwTDIxMi42MSAyMlpNMjIwLjE2IDIyTDIxNy43OCAyMkwyMTcuNzggMTMuNjBMMjIxLjYzIDEzLjYwUTIyMi43NyAxMy42MCAyMjMuNjEgMTMuOThRMjI0LjQ1IDE0LjM1IDIyNC45MCAxNS4wNlEyMjUuMzYgMTUuNzYgMjI1LjM2IDE2LjcxTDIyNS4zNiAxNi43MVEyMjUuMzYgMTcuNjYgMjI0LjkwIDE4LjM1UTIyNC40NSAxOS4wNSAyMjMuNjEgMTkuNDJRMjIyLjc3IDE5LjgwIDIyMS42MyAxOS44MEwyMjEuNjMgMTkuODBMMjIwLjE2IDE5LjgwTDIyMC4xNiAyMlpNMjIwLjE2IDE1LjQ3TDIyMC4xNiAxNy45M0wyMjEuNDggMTcuOTNRMjIyLjIxIDE3LjkzIDIyMi41OSAxNy42MVEyMjIuOTYgMTcuMjkgMjIyLjk2IDE2LjcxTDIyMi45NiAxNi43MVEyMjIuOTYgMTYuMTIgMjIyLjU5IDE1LjgwUTIyMi4yMSAxNS40NyAyMjEuNDggMTUuNDdMMjIxLjQ4IDE1LjQ3TDIyMC4xNiAxNS40N1pNMjMxLjkxIDE1LjQ4TDIyOS4zMiAxNS40OEwyMjkuMzIgMTMuNjBMMjM2Ljg1IDEzLjYwTDIzNi44NSAxNS40OEwyMzQuMjggMTUuNDhMMjM0LjI4IDIyTDIzMS45MSAyMkwyMzEuOTEgMTUuNDhaIiBmaWxsPSIjRkZGRkZGIiB4PSIxMjYuMzEiLz48L3N2Zz4=" alt="Made with TypeScript" />


</div>

* 🔥 **Performant**
* ⚡ **Zero dependencies**
* 🎉 **First class typescript support**
* 🙌🏼 **Simple API similar to native `map`**

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



## Installation

```bash
$ yarn add multi-key-map
```

```bash
$ npm install multi-key-map
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage

Import the default `MultiIndexMap` export and instantiate a new instance. You can optionally pass an array of indexes and/or an array of initial data into the constructor, in which case MultiIndexMap will use those index keys to cache all inital and future data set on the instance. Otherwise, MultiIndexMap will behave similar to native map, that is until you to decide to add an index. 

```typescript
import MultiIndexMap from "multi-key-map";

interface TestInterface {
    stringId: string;
    numberId: number;
    data: string;
}

const initialData: TestInterface[] = [
    { stringId: "1", numberId: 1, data: "foo" },
    { stringId: "2", numberId: 2, data: "bar" },
];

const exampleMap = new MultiIndexMap(["stringId", "numberId"], initialData);

const fooElement = exampleMap.get("numberId", 1);
const barElement = exampleMap.get("stringId", "2");

// prints: {stringId: '1', numberId: 1, data: 'foo'}
console.log(fooElement);

// prints: {stringId: '2', numberId: 2, data: 'bar'}
console.log(barElement);
```
You have the option to specify the typings of the data you expect the MultiIndexMap to handle, along with the index keys when calling the constructor as generic type paramaters.

> **NOTE**:  This is automatically inferred from the params if provided, but of course, without constructor params this will need to be specified for full type support.

```typescript
const exampleWithoutArgs = new MultiIndexMap<TestInterface, "stringId" | "numberId">();

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

## API

### new
```typescript 
constructor(indexKeys: IndexedProp[] = [], initialData: DataType[] = []): MultiIndexMap
```
Creates a new instance of MultiIndexMap.

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

### set
```typescript 
set(...dataItems: DataType[]): void
```
Adds one or more elements to the MultiIndexMap store.

### delete
```typescript 
delete(key: IndexedProp, value: DataType[IndexedProp]): void
```
Removes the element from the MultiIndexMap store that matches the specified key and value provided.

### addIndex
```typescript 
addIndex(key: IndexedProp): void
```
Adds new index to maintain for all currently and future added elements.

### removeIndex
```typescript 
removeIndex(key: IndexedProp): void
```
Removes an exising index.

### size
```typescript 
size(): number
```
Returns the size of the MultiIndexMap.


### indexes
```typescript 
indexes(): number
```
Returns the size of the indexes maintained by the MultiIndexMap.


### values
```typescript 
values(): IterableIterator<DataType>
```
Returns a new iterator object that contains the values for each element in the MultiIndexMap in insertion order.

### indexes
```typescript 
entries(): IterableIterator<[number, DataType]>
```
Returns a new iterator object that contains the [key, value] pairs for each element in the MultiIndexMap in insertion order. In this particular case, this iterator object is also an iterable, so the for-of loop can be used.


### indexes
```typescript 
clear(): void
```
Clears all elements and indexes from the MultiIndexMap.

<p align="right">(<a href="#top">back to top</a>)</p>


## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>


## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



## Contact

Jarvis Prestidge - jarvisprestidge@gmail.com

Project Link: [https://github.com/jarvisprestidge/multi-key-map](https://github.com/jarvisprestidge/multi-key-map)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[typescript-shield]:https://img.shields.io/badge/made%20with-typescript-%23007ACC?style=for-the-badge&link=https://www.typescriptlang.org "TypeScript (External Link)"
[contributors-shield]: https://img.shields.io/github/contributors/JarvisPrestidge/multi-key-map.svg?style=for-the-badge
[contributors-url]: https://github.com/JarvisPrestidge/multi-key-map/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/JarvisPrestidge/multi-key-map.svg?style=for-the-badge
[forks-url]: https://github.com/JarvisPrestidge/multi-key-map/network/members
[stars-shield]: https://img.shields.io/github/stars/JarvisPrestidge/multi-key-map.svg?style=for-the-badge
[stars-url]: https://github.com/JarvisPrestidge/multi-key-map/stargazers
[issues-shield]: https://img.shields.io/github/issues/JarvisPrestidge/multi-key-map.svg?style=for-the-badge
[issues-url]: https://github.com/JarvisPrestidge/multi-key-map/issues
[pulls-shield]: https://img.shields.io/github/issues-pr/JarvisPrestidge/multi-key-map.svg?style=for-the-badge
[pulls-url]: https://github.com/JarvisPrestidge/multi-key-map/pulls
[license-shield]: https://img.shields.io/github/license/JarvisPrestidge/multi-key-map.svg?style=for-the-badge
[license-url]: https://github.com/JarvisPrestidge/multi-key-map/blob/master/LICENSE.txt
[product-screenshot]: images/screenshot.png