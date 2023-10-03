## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|19,725,785|94|
|{ ...object, __proto__: null }|19,509,317|89|
|{ ...object, newProp: true }|573,405|81|
|structuredClone|183,073|97|
|JSON.parse + JSON.stringify|145,926|98|
|loop + object.keys starting with {}|850,010|91|
|loop + object.keys starting with { __proto__: null }|471,016|98|
|loop + object.keys starting with { randomProp: true }|362,675|97|
|object.keys + reduce(FN, {})|354,153|99|
|object.keys + reduce(FN, { __proto__: null })|464,876|93|
|object.keys + reduce(FN, { newProp: true })|363,612|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:45:14 GMT+0000 (Coordinated Universal Time)
</details>

