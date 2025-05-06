## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,836|1421|
|{...smallObject} - Total keys: 2|34,936,014|17474923|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,031|516|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,415|3209|
|{ ...bigObject, ...anotherBigObject }|1,379|691|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,786,205|5893289|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,276,716|13140644|
|{ ...smallObject, ...anotherSmallObject }|18,938,822|9472114|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:51:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1421,"opsSec":2836.932172453501},{"name":"{...smallObject} - Total keys: 2","samples":17474923,"opsSec":34936014.34281748},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":516,"opsSec":1031.0050059369105},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3209,"opsSec":6415.97157775375},{"name":"{ ...bigObject, ...anotherBigObject }","samples":691,"opsSec":1379.7396415322596},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5893289,"opsSec":11786205.956622772},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13140644,"opsSec":26276716.534517623},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9472114,"opsSec":18938822.51915423}]}-->
