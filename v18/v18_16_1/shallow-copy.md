## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|14,973,856|93|
|{ ...object, __proto__: null }|15,250,906|94|
|{ ...object, newProp: true }|454,555|84|
|structuredClone|174,971|91|
|JSON.parse + JSON.stringify|147,735|96|
|loop + object.keys starting with {}|658,030|97|
|loop + object.keys starting with { __proto__: null }|420,846|98|
|loop + object.keys starting with { randomProp: true }|308,772|96|
|object.keys + reduce(FN, {})|293,097|96|
|object.keys + reduce(FN, { __proto__: null })|415,194|96|
|object.keys + reduce(FN, { newProp: true })|301,646|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":14973856.109967947,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":15250905.908839418,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":454555.4395373111,"samples":3},{"name":"structuredClone","opsSec":174970.9821200697,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":147734.72191125457,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":658030.3213166612,"samples":7},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":420846.39852423273,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":308772.31918952806,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":293096.62529358896,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":415194.33234738227,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":301646.1421777729,"samples":4}]}-->
