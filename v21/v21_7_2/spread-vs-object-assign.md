## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,822|912|
|{...smallObject} - Total keys: 2|10,917,183|5459256|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,269|1135|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,661|3331|
|{ ...bigObject, ...anotherBigObject }|1,143|572|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,228,365|3114183|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|9,914,048|4957025|
|{ ...smallObject, ...anotherSmallObject }|8,762,736|4381369|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:28:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1822.8294882724208,"samples":912},{"name":"{...smallObject} - Total keys: 2","opsSec":10917183.116788505,"samples":5459256},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2269.827261605723,"samples":1135},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6661.170884060335,"samples":3331},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1143.8444440187172,"samples":572},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6228365.937653872,"samples":3114183},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":9914048.195603376,"samples":4957025},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8762736.212472424,"samples":4381369}]}-->
