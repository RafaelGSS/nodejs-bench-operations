## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|12,315,363|91|
|{ ...object, __proto__: null }|12,482,087|91|
|{ ...object, newProp: true }|380,689|75|
|structuredClone|147,857|96|
|JSON.parse + JSON.stringify|121,723|98|
|loop + object.keys starting with {}|555,349|97|
|loop + object.keys starting with { __proto__: null }|356,639|94|
|loop + object.keys starting with { randomProp: true }|266,849|96|
|object.keys + reduce(FN, {})|254,218|94|
|object.keys + reduce(FN, { __proto__: null })|358,494|97|
|object.keys + reduce(FN, { newProp: true })|268,620|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:45:18 GMT+0000 (Coordinated Universal Time)
</details>

