## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,065|89|
|{...smallObject} - Total keys: 2|54,533,832|91|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,125|89|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,121|92|
|{ ...bigObject, ...anotherBigObject }|694|89|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,569,888|88|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|22,186,589|90|
|{ ...smallObject, ...anotherSmallObject }|14,201,301|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:40:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1065.0988877629966,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":54533831.97962411,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1125.363231356152,"samples":2},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3121.20413553651,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":693.5121625160609,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8569887.808980845,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":22186589.032120686,"samples":4},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":14201300.85564754,"samples":4}]}-->
