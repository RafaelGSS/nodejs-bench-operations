## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,193|1097|
|{...smallObject} - Total keys: 2|13,509,521|6754761|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,472|1237|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,618|3310|
|{ ...bigObject, ...anotherBigObject }|1,326|664|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,602,938|3301470|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,948,730|5474366|
|{ ...smallObject, ...anotherSmallObject }|9,267,781|4633891|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:39:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2193.0585694752904,"samples":1097},{"name":"{...smallObject} - Total keys: 2","opsSec":13509521.123909533,"samples":6754761},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2472.2708761943913,"samples":1237},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6618.705150664142,"samples":3310},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1326.791184711251,"samples":664},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6602938.221082642,"samples":3301470},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10948730.981951455,"samples":5474366},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9267781.96906544,"samples":4633891}]}-->
