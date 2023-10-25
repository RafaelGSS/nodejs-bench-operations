## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|15,162,872|92|
|{ ...object, __proto__: null }|15,474,037|95|
|{ ...object, newProp: true }|453,568|84|
|structuredClone|178,788|96|
|JSON.parse + JSON.stringify|147,156|95|
|loop + object.keys starting with {}|674,385|98|
|loop + object.keys starting with { __proto__: null }|432,615|91|
|loop + object.keys starting with { randomProp: true }|317,947|98|
|object.keys + reduce(FN, {})|303,312|94|
|object.keys + reduce(FN, { __proto__: null })|432,158|97|
|object.keys + reduce(FN, { newProp: true })|314,198|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":15162872.357371971,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":15474037.223964296,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":453567.7910222224,"samples":3},{"name":"structuredClone","opsSec":178787.9792468986,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":147155.6268740268,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":674384.8814762434,"samples":7},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":432614.5533573679,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":317946.535072462,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":303312.1787749182,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":432157.5299577947,"samples":7},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":314198.0434268242,"samples":5}]}-->
