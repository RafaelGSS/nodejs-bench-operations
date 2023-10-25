## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,232|93|
|{...smallObject} - Total keys: 2|65,607,312|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,300|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,608|97|
|{ ...bigObject, ...anotherBigObject }|777|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,013,971|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,791,896|97|
|{ ...smallObject, ...anotherSmallObject }|14,613,851|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1231.7826255370333,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":65607311.99591686,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1299.8097448335739,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3607.927748015828,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":777.3838447391223,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8013970.951960881,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":19791896.195036467,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":14613850.62595165,"samples":6}]}-->
