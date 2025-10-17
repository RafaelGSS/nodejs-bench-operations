## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,796|899|
|{...smallObject} - Total keys: 2|38,731,413|19365731|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,082|542|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,442|3222|
|{ ...bigObject, ...anotherBigObject }|1,133|567|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,040,726|6020366|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,449,477|14224744|
|{ ...smallObject, ...anotherSmallObject }|19,968,012|9984143|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:04:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":899,"opsSec":1796.7641029988088},{"name":"{...smallObject} - Total keys: 2","samples":19365731,"opsSec":38731413.43080755},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":542,"opsSec":1082.2947861205487},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3222,"opsSec":6442.544332878163},{"name":"{ ...bigObject, ...anotherBigObject }","samples":567,"opsSec":1133.326520715065},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6020366,"opsSec":12040726.220451415},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14224744,"opsSec":28449477.359895464},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9984143,"opsSec":19968012.637906987}]}-->
