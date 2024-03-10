## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,103|94|
|{...smallObject} - Total keys: 2|103,595,691|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,295|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,211|98|
|{ ...bigObject, ...anotherBigObject }|1,245|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,601,176|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|37,267,858|98|
|{ ...smallObject, ...anotherSmallObject }|24,966,117|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:18:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2103.1205609812173,"samples":5},{"name":"{...smallObject} - Total keys: 2","opsSec":103595691.12381253,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2295.1386708518016,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6211.434594190263,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1244.875912419628,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13601175.963616453,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":37267857.66587761,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24966117.117367785,"samples":5}]}-->
