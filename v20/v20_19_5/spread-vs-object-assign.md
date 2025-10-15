## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,801|901|
|{...smallObject} - Total keys: 2|41,793,801|20901232|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,076|539|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,688|3345|
|{ ...bigObject, ...anotherBigObject }|1,122|562|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,233,802|6117104|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,504,785|14252406|
|{ ...smallObject, ...anotherSmallObject }|20,441,880|10221399|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:40:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":901,"opsSec":1801.4891589251602},{"name":"{...smallObject} - Total keys: 2","samples":20901232,"opsSec":41793801.48235435},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":539,"opsSec":1076.897584250593},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3345,"opsSec":6688.849959271103},{"name":"{ ...bigObject, ...anotherBigObject }","samples":562,"opsSec":1122.1446841321751},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6117104,"opsSec":12233802.13138049},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14252406,"opsSec":28504785.661578048},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10221399,"opsSec":20441880.20046276}]}-->
