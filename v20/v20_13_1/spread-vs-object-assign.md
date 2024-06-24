## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,296|1149|
|{...smallObject} - Total keys: 2|15,414,862|7707432|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,543|1272|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,802|3402|
|{ ...bigObject, ...anotherBigObject }|1,359|680|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,227,030|4113516|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|13,209,254|6604628|
|{ ...smallObject, ...anotherSmallObject }|11,222,025|5611013|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:11:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2296.3721981963145,"samples":1149},{"name":"{...smallObject} - Total keys: 2","opsSec":15414862.581806084,"samples":7707432},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2543.6857428884787,"samples":1272},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6802.098786180433,"samples":3402},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1359.8127429067945,"samples":680},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8227030.206518421,"samples":4113516},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":13209254.150706196,"samples":6604628},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":11222025.07970549,"samples":5611013}]}-->
