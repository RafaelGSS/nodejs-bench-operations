## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|21,921,008|10960669|
|{ ...object, __proto__: null }|2,526,390|1263196|
|{ ...object, newProp: true }|19,435,632|9732147|
|structuredClone|303,315|151730|
|JSON.parse + JSON.stringify|299,624|149824|
|loop + object.keys starting with {}|1,616,158|808080|
|loop + object.keys starting with { __proto__: null }|872,510|436306|
|loop + object.keys starting with { randomProp: true }|652,358|326215|
|object.keys + reduce(FN, {})|1,705,071|852623|
|object.keys + reduce(FN, { __proto__: null })|888,111|444121|
|object.keys + reduce(FN, { newProp: true })|672,567|336331|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:38:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{ ...object }","opsSec":21921008.43955912,"samples":10960669},{"name":"{ ...object, __proto__: null }","opsSec":2526390.084996315,"samples":1263196},{"name":"{ ...object, newProp: true }","opsSec":19435632.816483248,"samples":9732147},{"name":"structuredClone","opsSec":303315.6508684891,"samples":151730},{"name":"JSON.parse + JSON.stringify","opsSec":299624.14931846596,"samples":149824},{"name":"loop + object.keys starting with {}","opsSec":1616158.7232346085,"samples":808080},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":872510.0489458008,"samples":436306},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":652358.0618670856,"samples":326215},{"name":"object.keys + reduce(FN, {})","opsSec":1705071.2097401472,"samples":852623},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":888111.1847749274,"samples":444121},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":672567.3469070004,"samples":336331}]}-->
