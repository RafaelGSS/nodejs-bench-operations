## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,373|1187|
|{...smallObject} - Total keys: 2|12,172,735|6086368|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,529|1265|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|7,029|3515|
|{ ...bigObject, ...anotherBigObject }|1,421|712|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,105,186|3552594|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|11,157,123|5578562|
|{ ...smallObject, ...anotherSmallObject }|8,939,032|4469517|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:31:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2373.364180482753,"samples":1187},{"name":"{...smallObject} - Total keys: 2","opsSec":12172735.050528692,"samples":6086368},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2529.2024969272193,"samples":1265},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":7029.414154565314,"samples":3515},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1421.406788298249,"samples":712},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7105186.308961351,"samples":3552594},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":11157123.330650711,"samples":5578562},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8939032.551852204,"samples":4469517}]}-->
