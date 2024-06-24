## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,253|1127|
|{...smallObject} - Total keys: 2|11,515,023|5757512|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,446|1224|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,452|3227|
|{ ...bigObject, ...anotherBigObject }|1,341|671|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,922,414|3461208|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,538,857|5269429|
|{ ...smallObject, ...anotherSmallObject }|7,993,568|3996785|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:10:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2253.834275633551,"samples":1127},{"name":"{...smallObject} - Total keys: 2","opsSec":11515023.809752664,"samples":5757512},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2446.0167012241013,"samples":1224},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6452.221160849094,"samples":3227},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1341.659789967015,"samples":671},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6922414.21890003,"samples":3461208},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10538857.83652009,"samples":5269429},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":7993568.806721385,"samples":3996785}]}-->
