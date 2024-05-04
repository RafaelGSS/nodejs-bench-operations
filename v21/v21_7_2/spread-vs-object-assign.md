## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,208|93|
|{...smallObject} - Total keys: 2|125,669,693|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,320|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,896|99|
|{ ...bigObject, ...anotherBigObject }|1,387|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|16,493,627|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|40,820,969|93|
|{ ...smallObject, ...anotherSmallObject }|27,289,833|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:51:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2208.061927260374,"samples":5},{"name":"{...smallObject} - Total keys: 2","opsSec":125669692.72178052,"samples":8},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1319.7360070636948,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6895.834186653923,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1386.836125579945,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":16493626.563951118,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":40820968.72878201,"samples":8},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":27289832.511190753,"samples":5}]}-->
