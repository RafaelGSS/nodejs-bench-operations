## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,852,045|88|
|{ ...object, __proto__: null }|21,445,946|95|
|{ ...object, newProp: true }|579,059|78|
|structuredClone|185,448|97|
|JSON.parse + JSON.stringify|148,145|96|
|loop + object.keys starting with {}|356,080|95|
|loop + object.keys starting with { __proto__: null }|498,191|95|
|loop + object.keys starting with { randomProp: true }|378,674|94|
|object.keys + reduce(FN, {})|356,940|94|
|object.keys + reduce(FN, { __proto__: null })|491,904|97|
|object.keys + reduce(FN, { newProp: true })|378,627|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"{ ...object }","opsSec":20852045.286312386,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":21445946.428365417,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":579059.1843859957,"samples":3},{"name":"structuredClone","opsSec":185447.93721465548,"samples":7},{"name":"JSON.parse + JSON.stringify","opsSec":148144.7429208793,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":356079.70596149063,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":498190.7157424194,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":378674.1067255108,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":356939.59904279426,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":491904.47030915716,"samples":6},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":378626.50963322486,"samples":5}]}-->
