## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,320|94|
|{...smallObject} - Total keys: 2|70,597,354|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|785|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,689|97|
|{ ...bigObject, ...anotherBigObject }|814|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,999,571|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,793,757|98|
|{ ...smallObject, ...anotherSmallObject }|14,697,363|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1320.0493306568335,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":70597354.09740353,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":784.8419644751314,"samples":2},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3688.542564720888,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":814.2682036972594,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7999570.82873022,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":19793757.176898394,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":14697362.577226818,"samples":7}]}-->
