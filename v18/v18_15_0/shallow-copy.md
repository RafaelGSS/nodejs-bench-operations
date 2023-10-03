## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|15,230,165|93|
|{ ...object, __proto__: null }|15,498,788|97|
|{ ...object, newProp: true }|464,193|80|
|structuredClone|174,815|97|
|JSON.parse + JSON.stringify|147,456|96|
|loop + object.keys starting with {}|677,804|97|
|loop + object.keys starting with { __proto__: null }|430,981|95|
|loop + object.keys starting with { randomProp: true }|314,592|98|
|object.keys + reduce(FN, {})|302,364|96|
|object.keys + reduce(FN, { __proto__: null })|418,935|92|
|object.keys + reduce(FN, { newProp: true })|316,044|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:45:14 GMT+0000 (Coordinated Universal Time)
</details>

