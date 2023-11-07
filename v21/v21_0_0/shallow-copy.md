## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|34,971,131|92|
|{ ...object, __proto__: null }|2,730,864|98|
|{ ...object, newProp: true }|32,616,543|96|
|structuredClone|268,833|97|
|JSON.parse + JSON.stringify|273,973|95|
|loop + object.keys starting with {}|1,633,772|94|
|loop + object.keys starting with { __proto__: null }|888,350|99|
|loop + object.keys starting with { randomProp: true }|628,952|96|
|object.keys + reduce(FN, {})|637,352|96|
|object.keys + reduce(FN, { __proto__: null })|899,188|95|
|object.keys + reduce(FN, { newProp: true })|657,702|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:56:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":34971130.87329279,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":2730863.610900028,"samples":4},{"name":"{ ...object, newProp: true }","opsSec":32616542.797331672,"samples":5},{"name":"structuredClone","opsSec":268832.6209886768,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":273973.09597570036,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":1633771.8266950264,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":888350.3600266498,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":628951.6626330107,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":637352.0200472597,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":899188.354513264,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":657702.4921199136,"samples":5}]}-->
