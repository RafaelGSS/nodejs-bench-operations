## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|21,541,482|10772814|
|{ ...object, __proto__: null }|19,519,799|9761047|
|{ ...object, newProp: true }|814,162|409215|
|structuredClone|282,658|141332|
|JSON.parse + JSON.stringify|191,217|95612|
|loop + object.keys starting with {}|1,523,367|761711|
|loop + object.keys starting with { __proto__: null }|809,245|404642|
|loop + object.keys starting with { randomProp: true }|596,616|298492|
|object.keys + reduce(FN, {})|1,571,024|785517|
|object.keys + reduce(FN, { __proto__: null })|841,401|422333|
|object.keys + reduce(FN, { newProp: true })|622,166|311844|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:23:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"{ ...object }","opsSec":21541482.772470094,"samples":10772814},{"name":"{ ...object, __proto__: null }","opsSec":19519799.057224844,"samples":9761047},{"name":"{ ...object, newProp: true }","opsSec":814162.2980130814,"samples":409215},{"name":"structuredClone","opsSec":282658.74141677463,"samples":141332},{"name":"JSON.parse + JSON.stringify","opsSec":191217.77127231858,"samples":95612},{"name":"loop + object.keys starting with {}","opsSec":1523367.012544315,"samples":761711},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":809245.4232706727,"samples":404642},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":596616.4389307692,"samples":298492},{"name":"object.keys + reduce(FN, {})","opsSec":1571024.1905249546,"samples":785517},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":841401.8639262808,"samples":422333},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":622166.5923892999,"samples":311844}]}-->
