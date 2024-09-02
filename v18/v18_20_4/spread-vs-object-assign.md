## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,813|907|
|{...smallObject} - Total keys: 2|11,791,076|5895539|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,157|1079|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,047|3024|
|{ ...bigObject, ...anotherBigObject }|1,087|544|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,248,364|3124183|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|9,532,227|4766114|
|{ ...smallObject, ...anotherSmallObject }|8,093,122|4046562|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:23:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1813.833417534062,"samples":907},{"name":"{...smallObject} - Total keys: 2","opsSec":11791076.359218739,"samples":5895539},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2157.2637216174967,"samples":1079},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6047.231251637141,"samples":3024},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1087.621394698644,"samples":544},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6248364.720604485,"samples":3124183},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":9532227.737259176,"samples":4766114},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8093122.874348269,"samples":4046562}]}-->
