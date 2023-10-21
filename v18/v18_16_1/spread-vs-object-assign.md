## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,122|89|
|{...smallObject} - Total keys: 2|51,378,846|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,129|91|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,058|93|
|{ ...bigObject, ...anotherBigObject }|684|89|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,688,488|90|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|14,468,315|94|
|{ ...smallObject, ...anotherSmallObject }|9,393,123|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1122.2704279334666,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":51378846.01945004,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1129.0598918547423,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3057.869906327433,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":684.4756194492776,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6688487.52664348,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":14468314.986169232,"samples":7},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9393122.819099516,"samples":5}]}-->
