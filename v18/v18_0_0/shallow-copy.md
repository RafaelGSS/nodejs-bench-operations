## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|15,155,075|93|
|{ ...object, __proto__: null }|15,521,437|95|
|{ ...object, newProp: true }|502,025|78|
|structuredClone|174,908|95|
|JSON.parse + JSON.stringify|146,068|92|
|loop + object.keys starting with {}|659,059|96|
|loop + object.keys starting with { __proto__: null }|435,006|96|
|loop + object.keys starting with { randomProp: true }|337,404|98|
|object.keys + reduce(FN, {})|317,860|97|
|object.keys + reduce(FN, { __proto__: null })|434,637|98|
|object.keys + reduce(FN, { newProp: true })|334,208|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:45:15 GMT+0000 (Coordinated Universal Time)
</details>

