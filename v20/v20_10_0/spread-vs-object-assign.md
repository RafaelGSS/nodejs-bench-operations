## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,062|93|
|{...smallObject} - Total keys: 2|101,864,480|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,283|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,226|97|
|{ ...bigObject, ...anotherBigObject }|1,248|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,561,459|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|37,327,024|99|
|{ ...smallObject, ...anotherSmallObject }|24,792,295|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:21:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2062.394750184095,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":101864480.03276393,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2283.141323856033,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6226.16868079178,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1247.5276214244966,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13561458.835682377,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":37327023.67133779,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24792294.645377375,"samples":8}]}-->
