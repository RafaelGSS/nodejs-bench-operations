## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,118|86|
|{...smallObject} - Total keys: 2|54,223,657|86|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,134|85|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,122|86|
|{ ...bigObject, ...anotherBigObject }|686|84|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,126,679|82|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,416,226|87|
|{ ...smallObject, ...anotherSmallObject }|12,916,049|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:40:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1117.7628806761486,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":54223656.64248248,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1133.5750334695767,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3121.713540917329,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":685.7271354729049,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8126678.807799977,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":20416225.61873879,"samples":7},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":12916049.331189174,"samples":4}]}-->
