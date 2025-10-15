## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|3,044|1523|
|{...smallObject} - Total keys: 2|40,385,768|20193321|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,115|558|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,515|3258|
|{ ...bigObject, ...anotherBigObject }|1,540|771|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,206,366|6103563|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,447,486|13723747|
|{ ...smallObject, ...anotherSmallObject }|19,822,665|9914380|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:42:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1523,"opsSec":3044.566806710543},{"name":"{...smallObject} - Total keys: 2","samples":20193321,"opsSec":40385768.13274914},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":558,"opsSec":1115.4088243997976},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3258,"opsSec":6515.723629066549},{"name":"{ ...bigObject, ...anotherBigObject }","samples":771,"opsSec":1540.7137259016486},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6103563,"opsSec":12206366.519875133},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13723747,"opsSec":27447486.80875846},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9914380,"opsSec":19822665.085520823}]}-->
