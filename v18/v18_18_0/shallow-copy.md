## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,401,426|91|
|{ ...object, __proto__: null }|25,682,225|93|
|{ ...object, newProp: true }|683,198|86|
|structuredClone|254,979|94|
|JSON.parse + JSON.stringify|173,249|97|
|loop + object.keys starting with {}|1,151,296|98|
|loop + object.keys starting with { __proto__: null }|682,077|98|
|loop + object.keys starting with { randomProp: true }|531,508|95|
|object.keys + reduce(FN, {})|505,537|94|
|object.keys + reduce(FN, { __proto__: null })|680,316|96|
|object.keys + reduce(FN, { newProp: true })|527,630|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:14:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":24401425.800518636,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":25682225.08326208,"samples":8},{"name":"{ ...object, newProp: true }","opsSec":683197.6061266481,"samples":3},{"name":"structuredClone","opsSec":254979.0748491403,"samples":3},{"name":"JSON.parse + JSON.stringify","opsSec":173248.6408421413,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":1151296.0724754268,"samples":7},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":682076.5254949366,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":531508.4891014013,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":505536.8140789905,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":680316.3684585663,"samples":6},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":527630.2454871939,"samples":4}]}-->
