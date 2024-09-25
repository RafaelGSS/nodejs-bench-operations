## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,748|875|
|{...smallObject} - Total keys: 2|11,655,721|5827861|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,249|1125|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,711|3356|
|{ ...bigObject, ...anotherBigObject }|1,075|538|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,565,558|3282780|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,310,909|5155555|
|{ ...smallObject, ...anotherSmallObject }|8,185,803|4092902|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:10:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1748.2265395586446,"samples":875},{"name":"{...smallObject} - Total keys: 2","opsSec":11655721.860143164,"samples":5827861},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2249.6248975447456,"samples":1125},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6711.572942615001,"samples":3356},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1075.347176085653,"samples":538},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6565558.831209416,"samples":3282780},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10310909.37033985,"samples":5155555},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8185803.246928835,"samples":4092902}]}-->
