## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|19,377,774|92|
|{ ...object, __proto__: null }|19,635,752|94|
|{ ...object, newProp: true }|454,592|87|
|structuredClone|182,467|96|
|JSON.parse + JSON.stringify|145,650|98|
|loop + object.keys starting with {}|887,766|92|
|loop + object.keys starting with { __proto__: null }|537,445|95|
|loop + object.keys starting with { randomProp: true }|382,169|94|
|object.keys + reduce(FN, {})|366,368|98|
|object.keys + reduce(FN, { __proto__: null })|539,674|96|
|object.keys + reduce(FN, { newProp: true })|382,702|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":19377773.699185684,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":19635751.79643352,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":454592.2732530874,"samples":3},{"name":"structuredClone","opsSec":182467.29513124493,"samples":3},{"name":"JSON.parse + JSON.stringify","opsSec":145650.05228329054,"samples":7},{"name":"loop + object.keys starting with {}","opsSec":887765.7109291774,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":537444.5825592412,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":382169.3253608287,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":366368.09206912486,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":539674.4566859012,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":382701.91742619587,"samples":5}]}-->
