## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,320|1161|
|{...smallObject} - Total keys: 2|12,277,303|6138652|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,467|1234|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,795|3398|
|{ ...bigObject, ...anotherBigObject }|1,392|697|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,086,912|3543457|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,641,452|5320727|
|{ ...smallObject, ...anotherSmallObject }|9,147,047|4573524|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:30:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2320.368776109678,"samples":1161},{"name":"{...smallObject} - Total keys: 2","opsSec":12277303.31246373,"samples":6138652},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2467.209279163705,"samples":1234},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6795.509010882921,"samples":3398},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1392.4349393314947,"samples":697},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7086912.738522635,"samples":3543457},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10641452.6166237,"samples":5320727},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9147047.39629307,"samples":4573524}]}-->
