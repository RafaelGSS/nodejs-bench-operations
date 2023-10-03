## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,424,160|95|
|{ ...object, __proto__: null }|13,495,071|96|
|{ ...object, newProp: true }|479,121|85|
|structuredClone|172,529|97|
|JSON.parse + JSON.stringify|147,253|96|
|loop + object.keys starting with {}|695,462|97|
|loop + object.keys starting with { __proto__: null }|423,096|97|
|loop + object.keys starting with { randomProp: true }|322,098|97|
|object.keys + reduce(FN, {})|305,329|97|
|object.keys + reduce(FN, { __proto__: null })|419,655|94|
|object.keys + reduce(FN, { newProp: true })|321,147|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:45:14 GMT+0000 (Coordinated Universal Time)
</details>

