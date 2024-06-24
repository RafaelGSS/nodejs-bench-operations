## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,104|1053|
|{...smallObject} - Total keys: 2|12,270,631|6135316|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,494|1248|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,627|3314|
|{ ...bigObject, ...anotherBigObject }|1,309|655|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,159,753|3579877|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,920,910|5460456|
|{ ...smallObject, ...anotherSmallObject }|8,575,879|4287940|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:13:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2104.398611579761,"samples":1053},{"name":"{...smallObject} - Total keys: 2","opsSec":12270631.803681476,"samples":6135316},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2494.845919205633,"samples":1248},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6627.483281638603,"samples":3314},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1309.0592262601926,"samples":655},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7159753.828151016,"samples":3579877},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10920910.842371933,"samples":5460456},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8575879.914240735,"samples":4287940}]}-->
