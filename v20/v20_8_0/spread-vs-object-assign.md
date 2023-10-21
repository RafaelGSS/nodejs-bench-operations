## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,220|94|
|{...smallObject} - Total keys: 2|64,225,361|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,304|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,640|98|
|{ ...bigObject, ...anotherBigObject }|777|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,099,423|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,803,357|94|
|{ ...smallObject, ...anotherSmallObject }|14,565,326|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1219.5047401377626,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":64225361.19842265,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1303.7529146926636,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3640.0184928585345,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":777.0835185827535,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8099422.893511924,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":19803357.28874381,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":14565325.933390738,"samples":5}]}-->
