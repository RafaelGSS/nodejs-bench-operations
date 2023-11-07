## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|27,221,913|94|
|{ ...object, __proto__: null }|27,905,792|98|
|{ ...object, newProp: true }|644,011|86|
|structuredClone|253,713|99|
|JSON.parse + JSON.stringify|206,398|96|
|loop + object.keys starting with {}|1,272,512|96|
|loop + object.keys starting with { __proto__: null }|731,620|87|
|loop + object.keys starting with { randomProp: true }|529,728|98|
|object.keys + reduce(FN, {})|529,542|99|
|object.keys + reduce(FN, { __proto__: null })|746,289|98|
|object.keys + reduce(FN, { newProp: true })|542,836|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:48:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":27221913.129808553,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":27905791.825553816,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":644011.3814550978,"samples":3},{"name":"structuredClone","opsSec":253713.24913879,"samples":7},{"name":"JSON.parse + JSON.stringify","opsSec":206398.40983570303,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":1272511.5250583899,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":731619.5420042077,"samples":8},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":529727.9614635074,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":529542.2226195193,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":746289.0436936346,"samples":6},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":542835.9183175035,"samples":7}]}-->
