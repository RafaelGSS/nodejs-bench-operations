## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,833|917|
|{...smallObject} - Total keys: 2|10,860,721|5430361|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,290|1146|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,860|3431|
|{ ...bigObject, ...anotherBigObject }|1,116|559|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,632,523|3316262|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,690,512|5345257|
|{ ...smallObject, ...anotherSmallObject }|8,689,396|4344699|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:30:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1833.681691195228,"samples":917},{"name":"{...smallObject} - Total keys: 2","opsSec":10860721.218028046,"samples":5430361},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2290.8219585529337,"samples":1146},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6860.206604789907,"samples":3431},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1116.1078044015408,"samples":559},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6632523.801040627,"samples":3316262},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10690512.695726441,"samples":5345257},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8689396.783355948,"samples":4344699}]}-->
