## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,174|93|
|{...smallObject} - Total keys: 2|113,671,751|99|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,294|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,522|99|
|{ ...bigObject, ...anotherBigObject }|1,338|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|15,126,859|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|41,227,030|99|
|{ ...smallObject, ...anotherSmallObject }|27,538,298|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:47:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2173.615433243295,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":113671751.13472864,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1293.7129585097384,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6521.6230701230925,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1337.768171497854,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":15126858.879034959,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":41227029.85086566,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":27538297.69729671,"samples":5}]}-->
