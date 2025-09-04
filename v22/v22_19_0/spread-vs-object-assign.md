## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,661|831|
|{...smallObject} - Total keys: 2|38,579,238|19289701|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,016|509|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,715|3358|
|{ ...bigObject, ...anotherBigObject }|1,069|535|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,151,493|6079108|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,410,461|14207164|
|{ ...smallObject, ...anotherSmallObject }|20,423,529|10213361|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:20:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":831,"opsSec":1661.3571710697981},{"name":"{...smallObject} - Total keys: 2","samples":19289701,"opsSec":38579238.50118723},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":509,"opsSec":1016.8622348791181},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3358,"opsSec":6715.676049218738},{"name":"{ ...bigObject, ...anotherBigObject }","samples":535,"opsSec":1069.5832219234123},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6079108,"opsSec":12151493.963660218},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14207164,"opsSec":28410461.336212143},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10213361,"opsSec":20423529.843132578}]}-->
