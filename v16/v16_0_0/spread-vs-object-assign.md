## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,919|95|
|{...smallObject} - Total keys: 2|90,689,261|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,111|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,623|97|
|{ ...bigObject, ...anotherBigObject }|1,185|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,071,044|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|31,719,849|98|
|{ ...smallObject, ...anotherSmallObject }|22,278,024|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:18:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1918.5467484658627,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":90689261.02080755,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2111.2848420482314,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":5622.981965438291,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1184.8138330132158,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13071044.247610511,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":31719848.63773899,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":22278024.407011498,"samples":6}]}-->
