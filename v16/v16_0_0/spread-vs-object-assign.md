## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,191|92|
|{...smallObject} - Total keys: 2|50,710,511|91|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,343|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,665|98|
|{ ...bigObject, ...anotherBigObject }|764|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,131,853|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|18,049,478|91|
|{ ...smallObject, ...anotherSmallObject }|12,309,255|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1191.4250601028036,"samples":6},{"name":"{...smallObject} - Total keys: 2","opsSec":50710511.441519074,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1343.230348928415,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3665.0773565025215,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":764.1357677953742,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8131852.802633198,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":18049478.312141523,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":12309254.878913946,"samples":5}]}-->
