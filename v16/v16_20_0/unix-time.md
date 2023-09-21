## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,634,170|91|
|{ ...object, __proto__: null }|13,424,046|94|
|{ ...object, newProp: true }|510,574|85|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|144,585|98|
|loop + object.keys starting with {}|328,752|92|
|loop + object.keys starting with { __proto__: null }|434,923|94|
|loop + object.keys starting with { randomProp: true }|341,338|96|
|object.keys + reduce(FN, {})|333,113|97|
|object.keys + reduce(FN, { __proto__: null })|426,462|91|
|object.keys + reduce(FN, { newProp: true })|344,621|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:53:53 GMT+0000 (Coordinated Universal Time)
</details>

