## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,813|907|
|{...smallObject} - Total keys: 2|52,544,838|26272480|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,065|533|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,560|3281|
|{ ...bigObject, ...anotherBigObject }|1,128|565|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,834,274|6417149|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,663,523|13833365|
|{ ...smallObject, ...anotherSmallObject }|20,680,640|10340402|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:23:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1813.6018563572702,"samples":907},{"name":"{...smallObject} - Total keys: 2","opsSec":52544838.726512216,"samples":26272480},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1065.3645164581199,"samples":533},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6560.4844362484455,"samples":3281},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1128.2014618447797,"samples":565},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12834274.436272135,"samples":6417149},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":27663523.79759186,"samples":13833365},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20680640.126607638,"samples":10340402}]}-->
