## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|11,252,850|94|
|{ ...object, __proto__: null }|11,086,698|94|
|{ ...object, newProp: true }|382,522|82|
|structuredClone|146,362|93|
|JSON.parse + JSON.stringify|122,681|95|
|loop + object.keys starting with {}|255,124|95|
|loop + object.keys starting with { __proto__: null }|357,768|96|
|loop + object.keys starting with { randomProp: true }|268,187|97|
|object.keys + reduce(FN, {})|253,768|96|
|object.keys + reduce(FN, { __proto__: null })|358,155|94|
|object.keys + reduce(FN, { newProp: true })|266,640|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":11252849.84410133,"samples":9},{"name":"{ ...object, __proto__: null }","opsSec":11086697.606000138,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":382522.0663304307,"samples":3},{"name":"structuredClone","opsSec":146362.26264265188,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":122681.0625877632,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":255124.1755777029,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":357767.5563267847,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":268186.65454404923,"samples":6},{"name":"object.keys + reduce(FN, {})","opsSec":253768.08617730736,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":358154.5948782112,"samples":6},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":266640.1458037248,"samples":6}]}-->
