## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,842|923|
|{...smallObject} - Total keys: 2|52,253,321|26127160|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,067|534|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,359|3180|
|{ ...bigObject, ...anotherBigObject }|1,117|559|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,484,243|6242132|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,377,713|14188859|
|{ ...smallObject, ...anotherSmallObject }|20,585,834|10295704|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:42:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1842.7135093997047,"samples":923},{"name":"{...smallObject} - Total keys: 2","opsSec":52253321.85704589,"samples":26127160},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1067.5426839299728,"samples":534},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6359.823909195602,"samples":3180},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1117.6188383304252,"samples":559},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12484243.276156163,"samples":6242132},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28377713.40281043,"samples":14188859},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20585834.591142796,"samples":10295704}]}-->
