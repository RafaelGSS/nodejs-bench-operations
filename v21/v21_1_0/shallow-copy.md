## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,364,661|92|
|{ ...object, __proto__: null }|1,454,605|95|
|{ ...object, newProp: true }|19,188,829|85|
|structuredClone|184,738|95|
|JSON.parse + JSON.stringify|182,585|95|
|loop + object.keys starting with {}|838,723|96|
|loop + object.keys starting with { __proto__: null }|435,152|97|
|loop + object.keys starting with { randomProp: true }|355,274|97|
|object.keys + reduce(FN, {})|418,313|50|
|object.keys + reduce(FN, { __proto__: null })|433,756|97|
|object.keys + reduce(FN, { newProp: true })|356,296|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:41:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{ ...object }","opsSec":23364660.557119418,"samples":7},{"name":"{ ...object, __proto__: null }","opsSec":1454604.9155645228,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":19188829.010068808,"samples":7},{"name":"structuredClone","opsSec":184738.09927741834,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":182584.6192775835,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":838722.7662830203,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":435152.2171845587,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":355274.19391179265,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":418313.31463234,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":433756.08558694005,"samples":7},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":356295.7724488862,"samples":6}]}-->
