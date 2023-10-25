## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,113|94|
|{...smallObject} - Total keys: 2|60,316,539|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,092|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,045|96|
|{ ...bigObject, ...anotherBigObject }|695|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,804,257|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|16,785,342|96|
|{ ...smallObject, ...anotherSmallObject }|11,760,899|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1113.010444562484,"samples":6},{"name":"{...smallObject} - Total keys: 2","opsSec":60316538.838438295,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1092.4864096446422,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3044.6440230412873,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":694.606702851731,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6804256.653723907,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":16785342.365750026,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":11760899.136977306,"samples":5}]}-->
