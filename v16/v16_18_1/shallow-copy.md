## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,950,216|95|
|{ ...object, __proto__: null }|14,257,341|97|
|{ ...object, newProp: true }|505,126|88|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|139,893|95|
|loop + object.keys starting with {}|384,293|98|
|loop + object.keys starting with { __proto__: null }|548,422|95|
|loop + object.keys starting with { randomProp: true }|400,537|96|
|object.keys + reduce(FN, {})|387,579|94|
|object.keys + reduce(FN, { __proto__: null })|581,221|95|
|object.keys + reduce(FN, { newProp: true })|408,639|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:31:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"{ ...object }","opsSec":13950215.91788779,"samples":7},{"name":"{ ...object, __proto__: null }","opsSec":14257341.213834552,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":505125.8020624567,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":139893.03950694785,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":384292.83723439765,"samples":7},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":548421.9628687573,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":400537.08337436273,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":387578.5523502446,"samples":9},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":581220.8393654302,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":408639.36108788726,"samples":7}]}-->
