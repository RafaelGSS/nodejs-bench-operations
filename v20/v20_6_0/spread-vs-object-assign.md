## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,294|94|
|{...smallObject} - Total keys: 2|71,130,626|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,318|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,664|98|
|{ ...bigObject, ...anotherBigObject }|819|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,042,454|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,711,503|94|
|{ ...smallObject, ...anotherSmallObject }|14,749,177|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1294.1321880189432,"samples":4},{"name":"{...smallObject} - Total keys: 2","opsSec":71130625.61987224,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1317.8433796728925,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3663.6240932052974,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":819.2176963140357,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8042454.468810359,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":19711502.525417585,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":14749177.046854941,"samples":5}]}-->
