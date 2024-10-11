## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,883|944|
|{...smallObject} - Total keys: 2|51,663,073|25884286|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,087|544|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,437|3219|
|{ ...bigObject, ...anotherBigObject }|1,153|577|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,965,856|6482929|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,817,557|13409008|
|{ ...smallObject, ...anotherSmallObject }|19,912,762|9959216|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:53:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1883.7114257779654,"samples":944},{"name":"{...smallObject} - Total keys: 2","opsSec":51663073.31780523,"samples":25884286},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1087.3742465675793,"samples":544},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6437.09122433513,"samples":3219},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1153.2334042397993,"samples":577},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12965856.65155091,"samples":6482929},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":26817557.41976812,"samples":13409008},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":19912762.159579255,"samples":9959216}]}-->
