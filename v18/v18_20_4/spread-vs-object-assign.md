## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,931|967|
|{...smallObject} - Total keys: 2|58,235,492|29125049|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,106|554|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,195|3099|
|{ ...bigObject, ...anotherBigObject }|1,169|585|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,372,260|6191755|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,085,032|14043577|
|{ ...smallObject, ...anotherSmallObject }|19,965,691|9986773|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:53:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1931.4395446759302,"samples":967},{"name":"{...smallObject} - Total keys: 2","opsSec":58235492.30558779,"samples":29125049},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1106.6495533367643,"samples":554},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6195.930472479165,"samples":3099},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1169.6128020211165,"samples":585},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12372260.176011678,"samples":6191755},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28085032.849808984,"samples":14043577},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":19965691.057892624,"samples":9986773}]}-->
