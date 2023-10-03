## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,112,032|93|
|{ ...object, __proto__: null }|12,860,316|95|
|{ ...object, newProp: true }|482,433|76|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|140,207|94|
|loop + object.keys starting with {}|321,922|95|
|loop + object.keys starting with { __proto__: null }|406,134|97|
|loop + object.keys starting with { randomProp: true }|333,005|98|
|object.keys + reduce(FN, {})|322,057|99|
|object.keys + reduce(FN, { __proto__: null })|401,172|94|
|object.keys + reduce(FN, { newProp: true })|335,893|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:45:08 GMT+0000 (Coordinated Universal Time)
</details>

