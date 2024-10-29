## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,839|920|
|{...smallObject} - Total keys: 2|55,621,087|27810718|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,080|541|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,193|3097|
|{ ...bigObject, ...anotherBigObject }|1,138|570|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,387,106|6196040|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,017,208|14008794|
|{ ...smallObject, ...anotherSmallObject }|19,541,024|9771735|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:22:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1839.3485910177938,"samples":920},{"name":"{...smallObject} - Total keys: 2","opsSec":55621087.367024384,"samples":27810718},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1080.3368344074718,"samples":541},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6193.4826707794755,"samples":3097},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1138.4712903515695,"samples":570},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12387106.675766533,"samples":6196040},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28017208.815095894,"samples":14008794},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":19541024.089096814,"samples":9771735}]}-->
