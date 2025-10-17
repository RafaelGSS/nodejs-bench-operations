## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,762|882|
|{...smallObject} - Total keys: 2|40,177,326|20110526|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,064|533|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,664|3333|
|{ ...bigObject, ...anotherBigObject }|1,115|559|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,192,165|6096487|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,954,585|14477300|
|{ ...smallObject, ...anotherSmallObject }|20,610,268|10305401|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:05:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":882,"opsSec":1762.245635127353},{"name":"{...smallObject} - Total keys: 2","samples":20110526,"opsSec":40177326.53340577},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":533,"opsSec":1064.3630436984092},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3333,"opsSec":6664.670158375278},{"name":"{ ...bigObject, ...anotherBigObject }","samples":559,"opsSec":1115.3699109045508},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6096487,"opsSec":12192165.269293357},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14477300,"opsSec":28954585.580616385},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10305401,"opsSec":20610268.48259006}]}-->
