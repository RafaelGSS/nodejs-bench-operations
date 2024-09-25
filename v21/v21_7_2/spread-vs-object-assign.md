## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,788|895|
|{...smallObject} - Total keys: 2|11,021,605|5510803|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,252|1127|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,709|3355|
|{ ...bigObject, ...anotherBigObject }|1,103|552|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,249,054|3124528|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|9,749,799|4874900|
|{ ...smallObject, ...anotherSmallObject }|8,070,069|4035035|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:07:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1788.7020784203778,"samples":895},{"name":"{...smallObject} - Total keys: 2","opsSec":11021605.404776009,"samples":5510803},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2252.5368556752414,"samples":1127},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6709.118193757009,"samples":3355},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1103.471975418113,"samples":552},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6249054.750153617,"samples":3124528},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":9749799.86352347,"samples":4874900},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8070069.4512270475,"samples":4035035}]}-->
