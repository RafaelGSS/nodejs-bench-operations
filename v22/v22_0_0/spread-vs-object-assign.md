## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,253|1127|
|{...smallObject} - Total keys: 2|12,203,319|6101660|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,479|1240|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,939|3470|
|{ ...bigObject, ...anotherBigObject }|1,372|687|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,892,838|3446420|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|11,067,528|5533765|
|{ ...smallObject, ...anotherSmallObject }|9,426,214|4713108|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:44:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2253.8670443830556,"samples":1127},{"name":"{...smallObject} - Total keys: 2","opsSec":12203319.389828498,"samples":6101660},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2479.4026424801636,"samples":1240},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6939.766879349981,"samples":3470},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1372.721186669745,"samples":687},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6892838.676573448,"samples":3446420},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":11067528.29553802,"samples":5533765},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9426214.586051181,"samples":4713108}]}-->
