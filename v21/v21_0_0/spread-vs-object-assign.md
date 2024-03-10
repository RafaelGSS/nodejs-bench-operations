## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,116|91|
|{...smallObject} - Total keys: 2|114,833,848|91|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,210|93|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,241|93|
|{ ...bigObject, ...anotherBigObject }|1,306|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|15,116,154|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|37,078,595|93|
|{ ...smallObject, ...anotherSmallObject }|24,834,212|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:18:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2116.1852740472154,"samples":4},{"name":"{...smallObject} - Total keys: 2","opsSec":114833847.96840301,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2209.748463364956,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6241.316614985528,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1306.1043148403426,"samples":5},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":15116154.346137386,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":37078595.188562214,"samples":9},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24834212.47770129,"samples":5}]}-->
