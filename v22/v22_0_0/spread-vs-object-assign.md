## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,271|1136|
|{...smallObject} - Total keys: 2|12,265,164|6132583|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,460|1231|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,842|3422|
|{ ...bigObject, ...anotherBigObject }|1,349|675|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,844,688|3422345|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|11,162,978|5581490|
|{ ...smallObject, ...anotherSmallObject }|8,820,010|4410006|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:12:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2271.8825164113136,"samples":1136},{"name":"{...smallObject} - Total keys: 2","opsSec":12265164.62629672,"samples":6132583},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2460.243720576584,"samples":1231},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6842.425927285079,"samples":3422},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1349.1049767763159,"samples":675},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6844688.247753899,"samples":3422345},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":11162978.548792602,"samples":5581490},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8820010.35947123,"samples":4410006}]}-->
