## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|12,757,322|89|
|{ ...object, __proto__: null }|13,037,211|96|
|{ ...object, newProp: true }|471,614|83|
|structuredClone|172,954|96|
|JSON.parse + JSON.stringify|141,388|95|
|loop + object.keys starting with {}|305,536|98|
|loop + object.keys starting with { __proto__: null }|420,298|94|
|loop + object.keys starting with { randomProp: true }|310,672|96|
|object.keys + reduce(FN, {})|309,066|94|
|object.keys + reduce(FN, { __proto__: null })|422,394|98|
|object.keys + reduce(FN, { newProp: true })|316,234|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":12757321.61707197,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":13037210.547661826,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":471613.804826398,"samples":3},{"name":"structuredClone","opsSec":172954.0404152941,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":141387.62424085804,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":305536.3973020432,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":420298.4550916329,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":310671.59989682003,"samples":7},{"name":"object.keys + reduce(FN, {})","opsSec":309066.0124281687,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":422394.1698023157,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":316233.85856107867,"samples":5}]}-->
