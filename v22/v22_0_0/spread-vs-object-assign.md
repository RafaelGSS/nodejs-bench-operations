## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,775|888|
|{...smallObject} - Total keys: 2|40,915,766|20481447|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,052|527|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,839|3420|
|{ ...bigObject, ...anotherBigObject }|1,115|559|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,972,424|5986231|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,903,200|13951601|
|{ ...smallObject, ...anotherSmallObject }|20,612,108|10307169|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:03:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":888,"opsSec":1775.7519487617815},{"name":"{...smallObject} - Total keys: 2","samples":20481447,"opsSec":40915766.810629845},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":527,"opsSec":1052.3643689936778},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3420,"opsSec":6839.743413865573},{"name":"{ ...bigObject, ...anotherBigObject }","samples":559,"opsSec":1115.4752600677689},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5986231,"opsSec":11972424.837593306},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13951601,"opsSec":27903200.549033567},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10307169,"opsSec":20612108.182136856}]}-->
