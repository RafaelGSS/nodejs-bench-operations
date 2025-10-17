## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,767|884|
|{...smallObject} - Total keys: 2|41,034,695|20524966|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,071|536|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,599|3301|
|{ ...bigObject, ...anotherBigObject }|1,118|560|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,882,653|5941329|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,389,999|14197992|
|{ ...smallObject, ...anotherSmallObject }|20,530,879|10265508|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:03:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":884,"opsSec":1767.473773568343},{"name":"{...smallObject} - Total keys: 2","samples":20524966,"opsSec":41034695.161131546},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":536,"opsSec":1071.7318376899643},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3301,"opsSec":6599.7372932684775},{"name":"{ ...bigObject, ...anotherBigObject }","samples":560,"opsSec":1118.9541158258457},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5941329,"opsSec":11882653.033051033},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14197992,"opsSec":28389999.38812898},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10265508,"opsSec":20530879.79814342}]}-->
