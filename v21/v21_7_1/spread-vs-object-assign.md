## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,121|94|
|{...smallObject} - Total keys: 2|111,988,053|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,235|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,236|96|
|{ ...bigObject, ...anotherBigObject }|1,276|97|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,612,700|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|36,880,159|97|
|{ ...smallObject, ...anotherSmallObject }|24,636,738|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:18:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2120.6432730495217,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":111988052.92557597,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2234.596228398227,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6236.381455950583,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1276.1475012677315,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14612699.700755196,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":36880158.599188246,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24636737.886549193,"samples":5}]}-->
