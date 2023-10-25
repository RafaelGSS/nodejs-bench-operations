## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,348|94|
|{...smallObject} - Total keys: 2|75,842,863|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,560|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,393|96|
|{ ...bigObject, ...anotherBigObject }|810|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,581,000|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,331,504|93|
|{ ...smallObject, ...anotherSmallObject }|16,512,859|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1348.473608141412,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":75842862.74764885,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1560.3376267089775,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":4393.390763950163,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":809.8133333213416,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":9580999.54491503,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":25331503.598787677,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":16512859.345739853,"samples":7}]}-->
