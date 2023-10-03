## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|15,193,442|90|
|{ ...object, __proto__: null }|15,183,730|87|
|{ ...object, newProp: true }|409,603|80|
|structuredClone|161,010|92|
|JSON.parse + JSON.stringify|124,982|89|
|loop + object.keys starting with {}|722,991|87|
|loop + object.keys starting with { __proto__: null }|382,756|83|
|loop + object.keys starting with { randomProp: true }|283,278|80|
|object.keys + reduce(FN, {})|265,274|87|
|object.keys + reduce(FN, { __proto__: null })|395,337|81|
|object.keys + reduce(FN, { newProp: true })|270,067|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:45:20 GMT+0000 (Coordinated Universal Time)
</details>

