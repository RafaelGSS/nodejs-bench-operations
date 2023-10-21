## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,302,251|93|
|{ ...object, __proto__: null }|13,283,507|92|
|{ ...object, newProp: true }|476,617|82|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|138,460|96|
|loop + object.keys starting with {}|311,306|94|
|loop + object.keys starting with { __proto__: null }|411,895|92|
|loop + object.keys starting with { randomProp: true }|333,019|96|
|object.keys + reduce(FN, {})|321,613|94|
|object.keys + reduce(FN, { __proto__: null })|413,923|94|
|object.keys + reduce(FN, { newProp: true })|337,544|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":13302250.764122305,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":13283507.249650434,"samples":7},{"name":"{ ...object, newProp: true }","opsSec":476617.04844111094,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":138460.01995577544,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":311306.09612411703,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":411894.73594176746,"samples":7},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":333018.52600774483,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":321613.34286948916,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":413923.0693867003,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":337543.8055548683,"samples":5}]}-->
