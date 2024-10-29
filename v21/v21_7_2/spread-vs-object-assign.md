## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,853|927|
|{...smallObject} - Total keys: 2|54,749,179|27375594|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,100|551|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,550|3276|
|{ ...bigObject, ...anotherBigObject }|1,163|582|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,111,027|6555741|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|29,660,411|14830211|
|{ ...smallObject, ...anotherSmallObject }|21,233,824|10618656|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:24:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1853.9616637807162,"samples":927},{"name":"{...smallObject} - Total keys: 2","opsSec":54749179.03362454,"samples":27375594},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1100.3630778780869,"samples":551},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6550.720814543661,"samples":3276},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1163.5661899445354,"samples":582},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13111027.073582599,"samples":6555741},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":29660411.381572723,"samples":14830211},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":21233824.21696942,"samples":10618656}]}-->
