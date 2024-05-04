## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,202|96|
|{...smallObject} - Total keys: 2|125,260,201|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,317|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,806|99|
|{ ...bigObject, ...anotherBigObject }|1,374|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|16,233,193|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|40,821,970|95|
|{ ...smallObject, ...anotherSmallObject }|27,225,267|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:50:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2201.6479885717986,"samples":6},{"name":"{...smallObject} - Total keys: 2","opsSec":125260200.52950981,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1317.2830921031766,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6806.316785123126,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1374.002692812154,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":16233192.952968007,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":40821970.092479415,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":27225266.93178215,"samples":5}]}-->
