## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|14,209,556|93|
|{ ...object, __proto__: null }|14,402,591|99|
|{ ...object, newProp: true }|524,155|87|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|142,148|94|
|loop + object.keys starting with {}|384,143|93|
|loop + object.keys starting with { __proto__: null }|563,526|94|
|loop + object.keys starting with { randomProp: true }|404,798|96|
|object.keys + reduce(FN, {})|394,755|94|
|object.keys + reduce(FN, { __proto__: null })|573,931|96|
|object.keys + reduce(FN, { newProp: true })|411,952|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:45:08 GMT+0000 (Coordinated Universal Time)
</details>

