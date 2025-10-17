## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,779|891|
|{...smallObject} - Total keys: 2|40,868,707|20447979|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,060|531|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,606|3304|
|{ ...bigObject, ...anotherBigObject }|1,118|560|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,347,683|6177955|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,327,137|14167799|
|{ ...smallObject, ...anotherSmallObject }|20,703,903|10356915|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:04:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":891,"opsSec":1779.7570433884991},{"name":"{...smallObject} - Total keys: 2","samples":20447979,"opsSec":40868707.97158579},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":531,"opsSec":1060.3017719082304},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3304,"opsSec":6606.44501461113},{"name":"{ ...bigObject, ...anotherBigObject }","samples":560,"opsSec":1118.165035268872},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6177955,"opsSec":12347683.676790114},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14167799,"opsSec":28327137.02409655},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10356915,"opsSec":20703903.637624364}]}-->
