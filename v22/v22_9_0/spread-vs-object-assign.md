## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,844|923|
|{...smallObject} - Total keys: 2|55,378,519|27695345|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,089|545|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,605|3315|
|{ ...bigObject, ...anotherBigObject }|1,145|573|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,747,146|6373575|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,787,828|13894044|
|{ ...smallObject, ...anotherSmallObject }|20,454,358|10227184|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:54:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1844.3245491838377,"samples":923},{"name":"{...smallObject} - Total keys: 2","opsSec":55378519.35204497,"samples":27695345},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1089.6818172680848,"samples":545},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6605.994502999528,"samples":3315},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1145.3456228132445,"samples":573},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12747146.456293287,"samples":6373575},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":27787828.183806483,"samples":13894044},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20454358.75462984,"samples":10227184}]}-->
