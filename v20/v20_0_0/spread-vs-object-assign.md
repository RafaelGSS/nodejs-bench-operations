## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,775|888|
|{...smallObject} - Total keys: 2|39,565,306|19782805|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,075|539|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,630|3316|
|{ ...bigObject, ...anotherBigObject }|1,126|564|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,170,032|6085019|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,592,739|14296376|
|{ ...smallObject, ...anotherSmallObject }|20,777,605|10393485|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:41:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":888,"opsSec":1775.8733411615617},{"name":"{...smallObject} - Total keys: 2","samples":19782805,"opsSec":39565306.85061891},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":539,"opsSec":1075.4815834932708},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3316,"opsSec":6630.117749351665},{"name":"{ ...bigObject, ...anotherBigObject }","samples":564,"opsSec":1126.4943344315648},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6085019,"opsSec":12170032.645185636},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14296376,"opsSec":28592739.362009205},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10393485,"opsSec":20777605.699332155}]}-->
