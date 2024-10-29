## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,714,609|12357630|
|{ ...object, __proto__: null }|2,566,008|1283005|
|{ ...object, newProp: true }|21,237,459|10619982|
|structuredClone|294,611|147321|
|JSON.parse + JSON.stringify|273,863|136932|
|loop + object.keys starting with {}|1,584,145|792258|
|loop + object.keys starting with { __proto__: null }|842,892|421447|
|loop + object.keys starting with { randomProp: true }|649,831|324933|
|object.keys + reduce(FN, {})|1,653,605|826948|
|object.keys + reduce(FN, { __proto__: null })|870,600|435364|
|object.keys + reduce(FN, { newProp: true })|665,892|332989|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:12:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":24714609.363193907,"samples":12357630},{"name":"{ ...object, __proto__: null }","opsSec":2566008.8042398975,"samples":1283005},{"name":"{ ...object, newProp: true }","opsSec":21237459.211585667,"samples":10619982},{"name":"structuredClone","opsSec":294611.02518603404,"samples":147321},{"name":"JSON.parse + JSON.stringify","opsSec":273863.959468134,"samples":136932},{"name":"loop + object.keys starting with {}","opsSec":1584145.576071656,"samples":792258},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":842892.8941245229,"samples":421447},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":649831.0027015185,"samples":324933},{"name":"object.keys + reduce(FN, {})","opsSec":1653605.0977911965,"samples":826948},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":870600.7599577308,"samples":435364},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":665892.8842397507,"samples":332989}]}-->
