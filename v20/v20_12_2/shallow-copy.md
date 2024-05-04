## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|29,330,167|93|
|{ ...object, __proto__: null }|29,959,573|97|
|{ ...object, newProp: true }|969,279|91|
|structuredClone|305,836|98|
|JSON.parse + JSON.stringify|190,126|99|
|loop + object.keys starting with {}|1,623,439|97|
|loop + object.keys starting with { __proto__: null }|868,399|98|
|loop + object.keys starting with { randomProp: true }|679,207|96|
|object.keys + reduce(FN, {})|648,223|96|
|object.keys + reduce(FN, { __proto__: null })|881,520|97|
|object.keys + reduce(FN, { newProp: true })|683,107|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:28:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":29330166.635879185,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":29959573.186314214,"samples":7},{"name":"{ ...object, newProp: true }","opsSec":969279.3899842537,"samples":3},{"name":"structuredClone","opsSec":305835.8950562111,"samples":3},{"name":"JSON.parse + JSON.stringify","opsSec":190125.94668737188,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":1623438.753325565,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":868398.9043032861,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":679207.050551992,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":648223.1098207647,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":881519.5097952072,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":683106.8166186662,"samples":4}]}-->
