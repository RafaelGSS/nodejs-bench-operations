## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,776|889|
|{...smallObject} - Total keys: 2|41,769,213|20884651|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,063|532|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,104|3053|
|{ ...bigObject, ...anotherBigObject }|1,110|557|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,052,960|6029223|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,124,097|14062056|
|{ ...smallObject, ...anotherSmallObject }|19,586,604|9793331|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:39:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":889,"opsSec":1776.3457283028376},{"name":"{...smallObject} - Total keys: 2","samples":20884651,"opsSec":41769213.78342049},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":532,"opsSec":1063.3683336889487},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3053,"opsSec":6104.957639532627},{"name":"{ ...bigObject, ...anotherBigObject }","samples":557,"opsSec":1110.623641933598},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6029223,"opsSec":12052960.890346179},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14062056,"opsSec":28124097.76920653},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9793331,"opsSec":19586604.454556115}]}-->
