## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,436,568|95|
|{ ...object, __proto__: null }|12,883,934|91|
|{ ...object, newProp: true }|468,206|78|
|structuredClone|172,568|98|
|JSON.parse + JSON.stringify|142,217|96|
|loop + object.keys starting with {}|689,040|94|
|loop + object.keys starting with { __proto__: null }|405,111|97|
|loop + object.keys starting with { randomProp: true }|307,298|96|
|object.keys + reduce(FN, {})|293,743|98|
|object.keys + reduce(FN, { __proto__: null })|402,095|96|
|object.keys + reduce(FN, { newProp: true })|306,243|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:45:14 GMT+0000 (Coordinated Universal Time)
</details>

