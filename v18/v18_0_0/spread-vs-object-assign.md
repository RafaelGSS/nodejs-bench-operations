## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,186|1094|
|{...smallObject} - Total keys: 2|14,210,807|7105405|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,445|1223|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,463|3232|
|{ ...bigObject, ...anotherBigObject }|1,299|650|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,282,398|3641200|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|12,442,833|6221417|
|{ ...smallObject, ...anotherSmallObject }|9,915,668|4957835|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:38:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2186.976578529609,"samples":1094},{"name":"{...smallObject} - Total keys: 2","opsSec":14210807.919693932,"samples":7105405},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2445.589294388966,"samples":1223},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6463.777676958373,"samples":3232},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1299.6588360850642,"samples":650},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7282398.246378367,"samples":3641200},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":12442833.994066795,"samples":6221417},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9915668.486989062,"samples":4957835}]}-->
