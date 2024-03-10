## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,898|92|
|{...smallObject} - Total keys: 2|104,043,553|90|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,200|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,885|99|
|{ ...bigObject, ...anotherBigObject }|1,192|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,819,669|87|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|31,099,415|98|
|{ ...smallObject, ...anotherSmallObject }|22,403,383|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:18:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1897.83723054448,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":104043553.26113647,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2200.4893994463673,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":5885.474380470575,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1191.5008342001627,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12819668.71873423,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":31099415.303187788,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":22403382.75515182,"samples":6}]}-->
