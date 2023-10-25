## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,192|90|
|{...smallObject} - Total keys: 2|62,255,381|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,126|91|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,114|93|
|{ ...bigObject, ...anotherBigObject }|713|90|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,055,691|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|17,075,426|95|
|{ ...smallObject, ...anotherSmallObject }|11,986,944|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1192.0645863479322,"samples":5},{"name":"{...smallObject} - Total keys: 2","opsSec":62255381.47263774,"samples":7},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1126.4919067749934,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3113.9384324521943,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":713.438840783722,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7055691.250805437,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":17075425.934784476,"samples":7},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":11986943.582671937,"samples":5}]}-->
