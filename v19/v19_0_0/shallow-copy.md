## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,949,995|86|
|{ ...object, __proto__: null }|10,409,010|89|
|{ ...object, newProp: true }|389,091|80|
|structuredClone|136,239|91|
|JSON.parse + JSON.stringify|113,256|89|
|loop + object.keys starting with {}|586,176|87|
|loop + object.keys starting with { __proto__: null }|375,482|94|
|loop + object.keys starting with { randomProp: true }|272,470|97|
|object.keys + reduce(FN, {})|615,463|91|
|object.keys + reduce(FN, { __proto__: null })|373,216|95|
|object.keys + reduce(FN, { newProp: true })|275,760|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:45:17 GMT+0000 (Coordinated Universal Time)
</details>

