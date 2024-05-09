## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,205|1103|
|{...smallObject} - Total keys: 2|12,255,960|6127981|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,497|1249|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,910|3456|
|{ ...bigObject, ...anotherBigObject }|1,389|695|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,899,037|3449519|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,479,867|5239934|
|{ ...smallObject, ...anotherSmallObject }|8,983,302|4491652|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:43:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2205.0420062701287,"samples":1103},{"name":"{...smallObject} - Total keys: 2","opsSec":12255960.700874893,"samples":6127981},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2497.514912673477,"samples":1249},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6910.821359417397,"samples":3456},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1389.5093503532992,"samples":695},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6899037.227315487,"samples":3449519},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10479867.434065882,"samples":5239934},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8983302.454865148,"samples":4491652}]}-->
