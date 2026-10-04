# React Immutable

Bringing immutability to JavaScript with [Immutable.js](https://immutable-js.com/).

## Setup

```bash
npm install
npm test           # jest
npm run full-test  # eslint + jest
```

## Tasks

| File | Function / export | Description |
| ---- | ----------------- | ----------- |
| `0-fromjs.js` | `getImmutableObject` | Converts an object into an immutable Map with `fromJS` |
| `1-map.js` | `getImmutableObject` | Converts an object into an immutable Map with `Map` |
| `2-nested.js` | `accessImmutableObject` | Returns the value at a nested path with `getIn` |
| `3-list.js` | `getListObject`, `addElementToList` | Creates a List and appends an element to it |
| `4-mutations.js` | `map`, `map2` | Chained mutations on a Map with `withMutations` |
| `5-merge.js` | `concatElements`, `mergeElements` | Concatenates two Lists and merges two Maps |
| `6-deeply.js` | `mergeDeeplyElements` | Deep merges two nested Maps |
| `7-equality.js` | `areMapsEqual` | Compares two Maps with `is` |
| `8-seq.js` | `printBestStudents` | Filters students (score >= 70) and capitalizes names with a lazy `Seq` |

## Learning objectives

- Immutable objects: who, what, when, where and why
- Using Immutable.js to bring immutability to JavaScript
- Differences between `List` and `Map`
- `merge`, `concat` and deep merging
- What a lazy `Seq` is
