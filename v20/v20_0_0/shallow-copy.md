## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|19,002,248|90|
|{ ...object, __proto__: null }|17,394,913|93|
|{ ...object, newProp: true }|538,062|79|
|structuredClone|180,792|98|
|JSON.parse + JSON.stringify|141,882|94|
|loop + object.keys starting with {}|839,667|95|
|loop + object.keys starting with { __proto__: null }|440,054|98|
|loop + object.keys starting with { randomProp: true }|351,241|95|
|object.keys + reduce(FN, {})|336,426|95|
|object.keys + reduce(FN, { __proto__: null })|441,484|97|
|object.keys + reduce(FN, { newProp: true })|351,635|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":19002247.996049467,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":17394912.884101097,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":538061.6174997254,"samples":3},{"name":"structuredClone","opsSec":180791.96136868303,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":141882.06498750308,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":839666.6722602827,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":440053.83611931215,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":351240.9365723387,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":336425.77820800774,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":441483.70744438464,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":351634.8944256255,"samples":4}]}-->
