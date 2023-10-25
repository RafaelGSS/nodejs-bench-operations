## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|19,852,260|91|
|{ ...object, __proto__: null }|20,348,246|95|
|{ ...object, newProp: true }|579,782|84|
|structuredClone|183,957|97|
|JSON.parse + JSON.stringify|148,147|94|
|loop + object.keys starting with {}|855,158|98|
|loop + object.keys starting with { __proto__: null }|480,892|95|
|loop + object.keys starting with { randomProp: true }|378,049|96|
|object.keys + reduce(FN, {})|856,494|98|
|object.keys + reduce(FN, { __proto__: null })|479,439|95|
|object.keys + reduce(FN, { newProp: true })|361,208|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":19852260.326118883,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":20348245.63173263,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":579781.5943110312,"samples":3},{"name":"structuredClone","opsSec":183956.82689615004,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":148147.30126042484,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":855158.4763738696,"samples":7},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":480892.18726879935,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":378049.27552568633,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":856494.1810627059,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":479438.8972292367,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":361208.2608124448,"samples":5}]}-->
