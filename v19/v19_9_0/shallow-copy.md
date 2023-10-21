## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,621,530|92|
|{ ...object, __proto__: null }|13,911,278|95|
|{ ...object, newProp: true }|493,632|86|
|structuredClone|176,091|93|
|JSON.parse + JSON.stringify|147,379|94|
|loop + object.keys starting with {}|702,576|97|
|loop + object.keys starting with { __proto__: null }|442,957|93|
|loop + object.keys starting with { randomProp: true }|329,185|93|
|object.keys + reduce(FN, {})|310,879|93|
|object.keys + reduce(FN, { __proto__: null })|438,977|95|
|object.keys + reduce(FN, { newProp: true })|326,971|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":13621530.259664286,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":13911277.609064804,"samples":7},{"name":"{ ...object, newProp: true }","opsSec":493631.57874231896,"samples":3},{"name":"structuredClone","opsSec":176090.57248221122,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":147378.55982621192,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":702576.333990982,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":442956.58717615245,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":329185.01325332024,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":310879.43726452265,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":438976.85656115535,"samples":7},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":326970.7468017396,"samples":5}]}-->
