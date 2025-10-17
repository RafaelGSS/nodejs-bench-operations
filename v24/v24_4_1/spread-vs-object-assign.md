## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|3,002|1502|
|{...smallObject} - Total keys: 2|39,488,544|19750994|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,122|562|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,713|3357|
|{ ...bigObject, ...anotherBigObject }|1,535|769|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,401,807|6202438|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,534,956|13768374|
|{ ...smallObject, ...anotherSmallObject }|20,000,392|10000293|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:06:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1502,"opsSec":3002.3732601249453},{"name":"{...smallObject} - Total keys: 2","samples":19750994,"opsSec":39488544.519903645},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":562,"opsSec":1122.0434726000449},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3357,"opsSec":6713.129790411528},{"name":"{ ...bigObject, ...anotherBigObject }","samples":769,"opsSec":1535.5988485756338},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6202438,"opsSec":12401807.718359632},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13768374,"opsSec":27534956.08012822},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10000293,"opsSec":20000392.996207587}]}-->
