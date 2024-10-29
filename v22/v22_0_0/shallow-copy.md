## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,337,546|11669219|
|{ ...object, __proto__: null }|2,598,666|1299335|
|{ ...object, newProp: true }|20,367,879|10184722|
|structuredClone|310,356|155275|
|JSON.parse + JSON.stringify|310,570|155288|
|loop + object.keys starting with {}|1,679,352|839873|
|loop + object.keys starting with { __proto__: null }|917,957|458979|
|loop + object.keys starting with { randomProp: true }|673,663|336832|
|object.keys + reduce(FN, {})|1,751,949|877695|
|object.keys + reduce(FN, { __proto__: null })|916,269|458148|
|object.keys + reduce(FN, { newProp: true })|700,235|350118|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:13:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":23337546.785763346,"samples":11669219},{"name":"{ ...object, __proto__: null }","opsSec":2598666.7568638874,"samples":1299335},{"name":"{ ...object, newProp: true }","opsSec":20367879.17657862,"samples":10184722},{"name":"structuredClone","opsSec":310356.19248918863,"samples":155275},{"name":"JSON.parse + JSON.stringify","opsSec":310570.73085698026,"samples":155288},{"name":"loop + object.keys starting with {}","opsSec":1679352.0005097524,"samples":839873},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":917957.1297766409,"samples":458979},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":673663.3357679509,"samples":336832},{"name":"object.keys + reduce(FN, {})","opsSec":1751949.9166942772,"samples":877695},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":916269.8258361552,"samples":458148},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":700235.9117702751,"samples":350118}]}-->
