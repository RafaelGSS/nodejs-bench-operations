## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,236|1119|
|{...smallObject} - Total keys: 2|13,137,182|6568592|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,362|1182|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,645|3323|
|{ ...bigObject, ...anotherBigObject }|1,363|682|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,789,657|3394829|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,797,458|5398730|
|{ ...smallObject, ...anotherSmallObject }|9,030,279|4515140|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:42:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2236.939061609154,"samples":1119},{"name":"{...smallObject} - Total keys: 2","opsSec":13137182.809783585,"samples":6568592},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2362.1603517455615,"samples":1182},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6645.792341172064,"samples":3323},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1363.2127038935903,"samples":682},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6789657.2165102735,"samples":3394829},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10797458.954828182,"samples":5398730},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9030279.01823825,"samples":4515140}]}-->
