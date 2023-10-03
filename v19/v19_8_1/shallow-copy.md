## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,078,154|94|
|{ ...object, __proto__: null }|12,730,661|90|
|{ ...object, newProp: true }|461,768|86|
|structuredClone|172,881|94|
|JSON.parse + JSON.stringify|141,840|96|
|loop + object.keys starting with {}|692,970|96|
|loop + object.keys starting with { __proto__: null }|402,229|94|
|loop + object.keys starting with { randomProp: true }|302,884|97|
|object.keys + reduce(FN, {})|291,728|94|
|object.keys + reduce(FN, { __proto__: null })|399,507|94|
|object.keys + reduce(FN, { newProp: true })|306,617|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:45:15 GMT+0000 (Coordinated Universal Time)
</details>

