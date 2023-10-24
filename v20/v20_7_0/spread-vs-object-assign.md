## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,001|90|
|{...smallObject} - Total keys: 2|50,597,381|88|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,101|87|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,030|87|
|{ ...bigObject, ...anotherBigObject }|622|82|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,148,591|87|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|21,066,812|90|
|{ ...smallObject, ...anotherSmallObject }|13,262,787|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:40:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1001.0338483020508,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":50597380.88229785,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1100.6600708265294,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3029.704813831953,"samples":5},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":621.5368633389234,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8148591.100703348,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":21066812.126989618,"samples":4},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":13262786.677458461,"samples":5}]}-->
