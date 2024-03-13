## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|26,415,210|90|
|{ ...object, __proto__: null }|26,956,538|93|
|{ ...object, newProp: true }|859,779|85|
|structuredClone|289,403|97|
|JSON.parse + JSON.stringify|174,257|99|
|loop + object.keys starting with {}|1,462,764|97|
|loop + object.keys starting with { __proto__: null }|810,846|96|
|loop + object.keys starting with { randomProp: true }|617,738|93|
|object.keys + reduce(FN, {})|591,417|91|
|object.keys + reduce(FN, { __proto__: null })|792,610|98|
|object.keys + reduce(FN, { newProp: true })|619,668|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 16:13:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":26415210.08414497,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":26956538.48966435,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":859778.8538697894,"samples":3},{"name":"structuredClone","opsSec":289402.8494784316,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":174256.74487066251,"samples":8},{"name":"loop + object.keys starting with {}","opsSec":1462764.0533532565,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":810845.6242119513,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":617738.097115379,"samples":6},{"name":"object.keys + reduce(FN, {})","opsSec":591416.6530786603,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":792610.3241137913,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":619668.2018694625,"samples":4}]}-->
