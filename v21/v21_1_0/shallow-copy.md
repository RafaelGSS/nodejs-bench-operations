## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|32,317,844|97|
|{ ...object, __proto__: null }|2,747,008|93|
|{ ...object, newProp: true }|32,335,166|98|
|structuredClone|263,983|94|
|JSON.parse + JSON.stringify|277,546|96|
|loop + object.keys starting with {}|1,638,671|96|
|loop + object.keys starting with { __proto__: null }|872,460|98|
|loop + object.keys starting with { randomProp: true }|654,210|99|
|object.keys + reduce(FN, {})|637,991|98|
|object.keys + reduce(FN, { __proto__: null })|899,781|100|
|object.keys + reduce(FN, { newProp: true })|649,968|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:58:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":32317843.633368075,"samples":8},{"name":"{ ...object, __proto__: null }","opsSec":2747008.3616750543,"samples":4},{"name":"{ ...object, newProp: true }","opsSec":32335165.872845776,"samples":7},{"name":"structuredClone","opsSec":263982.77830798255,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":277546.32992683473,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":1638671.458987436,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":872459.6226412503,"samples":7},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":654210.2446938856,"samples":6},{"name":"object.keys + reduce(FN, {})","opsSec":637991.4426511351,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":899781.4823135975,"samples":6},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":649967.7388508201,"samples":4}]}-->
