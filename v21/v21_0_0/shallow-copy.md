## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|18,127,448|82|
|{ ...object, __proto__: null }|1,173,469|92|
|{ ...object, newProp: true }|17,397,927|95|
|structuredClone|152,843|94|
|JSON.parse + JSON.stringify|153,830|95|
|loop + object.keys starting with {}|699,032|92|
|loop + object.keys starting with { __proto__: null }|373,826|90|
|loop + object.keys starting with { randomProp: true }|298,055|93|
|object.keys + reduce(FN, {})|317,808|45|
|object.keys + reduce(FN, { __proto__: null })|392,585|95|
|object.keys + reduce(FN, { newProp: true })|301,870|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:42:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"{ ...object }","opsSec":18127448.427160155,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":1173468.7256769706,"samples":3},{"name":"{ ...object, newProp: true }","opsSec":17397927.19446143,"samples":6},{"name":"structuredClone","opsSec":152843.36026195114,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":153829.56163223737,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":699031.8912373462,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":373825.70226475626,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":298054.5453603477,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":317808.31470541575,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":392584.9094800364,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":301869.7580114368,"samples":4}]}-->
