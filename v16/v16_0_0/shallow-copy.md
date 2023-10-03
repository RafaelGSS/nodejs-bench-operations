## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,780,928|92|
|{ ...object, __proto__: null }|13,703,992|95|
|{ ...object, newProp: true }|458,441|76|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|139,286|96|
|loop + object.keys starting with {}|319,056|93|
|loop + object.keys starting with { __proto__: null }|419,735|97|
|loop + object.keys starting with { randomProp: true }|321,497|98|
|object.keys + reduce(FN, {})|321,857|92|
|object.keys + reduce(FN, { __proto__: null })|416,884|94|
|object.keys + reduce(FN, { newProp: true })|326,923|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:45:08 GMT+0000 (Coordinated Universal Time)
</details>

