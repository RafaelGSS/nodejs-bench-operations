## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,248|93|
|{...smallObject} - Total keys: 2|69,727,979|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,288|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,491|98|
|{ ...bigObject, ...anotherBigObject }|788|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,964,604|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,755,240|98|
|{ ...smallObject, ...anotherSmallObject }|14,566,880|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1247.557165106978,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":69727979.22178206,"samples":8},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1288.0333635719558,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3490.8869972311754,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":788.3060221977894,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7964603.595346169,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":19755240.013183244,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":14566880.480853284,"samples":6}]}-->
