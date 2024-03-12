## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,000|94|
|{...smallObject} - Total keys: 2|105,644,768|99|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,235|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,913|99|
|{ ...bigObject, ...anotherBigObject }|1,229|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,013,304|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|31,905,019|99|
|{ ...smallObject, ...anotherSmallObject }|22,458,761|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:21:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2000.2460954687174,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":105644767.9014057,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2234.635786331603,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":5913.083007379234,"samples":5},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1229.057245285751,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13013304.36495149,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":31905019.409998093,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":22458761.03750916,"samples":5}]}-->
