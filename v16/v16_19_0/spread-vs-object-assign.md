## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,243|89|
|{...smallObject} - Total keys: 2|55,090,629|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,311|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,509|98|
|{ ...bigObject, ...anotherBigObject }|771|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,929,584|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|18,947,093|95|
|{ ...smallObject, ...anotherSmallObject }|12,831,139|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1243.0109856043523,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":55090628.57649308,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1311.1039098103754,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3508.66486525725,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":770.5512703588759,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7929583.803872293,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":18947093.190398306,"samples":7},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":12831138.79892889,"samples":7}]}-->
