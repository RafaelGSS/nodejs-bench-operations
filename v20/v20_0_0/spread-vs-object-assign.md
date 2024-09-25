## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,717|859|
|{...smallObject} - Total keys: 2|10,798,161|5399081|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,159|1080|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,586|3294|
|{ ...bigObject, ...anotherBigObject }|1,080|541|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,372,640|3186321|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|9,809,257|4904629|
|{ ...smallObject, ...anotherSmallObject }|8,119,354|4059678|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:04:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1717.9592601694897,"samples":859},{"name":"{...smallObject} - Total keys: 2","opsSec":10798161.341133665,"samples":5399081},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2159.975415275373,"samples":1080},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6586.258422665515,"samples":3294},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1080.3457832589002,"samples":541},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6372640.434707347,"samples":3186321},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":9809257.208895082,"samples":4904629},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8119354.712810654,"samples":4059678}]}-->
