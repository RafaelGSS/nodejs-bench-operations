## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,724|863|
|{...smallObject} - Total keys: 2|39,682,473|19842576|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,046|525|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,363|3182|
|{ ...bigObject, ...anotherBigObject }|1,103|552|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,130,637|6065416|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,803,481|14404860|
|{ ...smallObject, ...anotherSmallObject }|20,232,734|10121485|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:19:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":863,"opsSec":1724.597005843806},{"name":"{...smallObject} - Total keys: 2","samples":19842576,"opsSec":39682473.11560491},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":525,"opsSec":1046.9028175788071},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3182,"opsSec":6363.637094503774},{"name":"{ ...bigObject, ...anotherBigObject }","samples":552,"opsSec":1103.0055522541986},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6065416,"opsSec":12130637.181966856},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14404860,"opsSec":28803481.569140863},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10121485,"opsSec":20232734.987748157}]}-->
