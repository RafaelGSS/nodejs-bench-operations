## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,775|888|
|{...smallObject} - Total keys: 2|57,668,762|28834519|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,050|526|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,530|3266|
|{ ...bigObject, ...anotherBigObject }|1,104|553|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,002,389|6502731|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,058,878|14029445|
|{ ...smallObject, ...anotherSmallObject }|20,628,644|10347231|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:43:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1775.7548286338297,"samples":888},{"name":"{...smallObject} - Total keys: 2","opsSec":57668762.22797903,"samples":28834519},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1050.4490833589582,"samples":526},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6530.486611971569,"samples":3266},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1104.310433748436,"samples":553},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13002389.977329617,"samples":6502731},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28058878.327506617,"samples":14029445},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20628644.412167694,"samples":10347231}]}-->
