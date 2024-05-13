## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,270|1136|
|{...smallObject} - Total keys: 2|12,360,712|6180357|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,547|1274|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,782|3392|
|{ ...bigObject, ...anotherBigObject }|1,391|696|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,230,293|3615147|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|11,020,096|5510049|
|{ ...smallObject, ...anotherSmallObject }|9,214,927|4607464|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:50:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2270.738404991072,"samples":1136},{"name":"{...smallObject} - Total keys: 2","opsSec":12360712.739217024,"samples":6180357},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2547.0122075376576,"samples":1274},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6782.770297311085,"samples":3392},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1391.042795631454,"samples":696},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7230293.595091138,"samples":3615147},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":11020096.743700128,"samples":5510049},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9214927.373365216,"samples":4607464}]}-->
