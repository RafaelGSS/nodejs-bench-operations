## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,702|853|
|{...smallObject} - Total keys: 2|38,116,859|19058892|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,035|519|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,180|3091|
|{ ...bigObject, ...anotherBigObject }|1,089|546|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,691,586|5845851|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,149,250|14079761|
|{ ...smallObject, ...anotherSmallObject }|19,198,145|9599123|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:48:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":853,"opsSec":1702.9576151318386},{"name":"{...smallObject} - Total keys: 2","samples":19058892,"opsSec":38116859.74238497},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":519,"opsSec":1035.4040618566187},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3091,"opsSec":6180.860113416164},{"name":"{ ...bigObject, ...anotherBigObject }","samples":546,"opsSec":1089.0338963894546},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5845851,"opsSec":11691586.440359624},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14079761,"opsSec":28149250.39482943},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9599123,"opsSec":19198145.977659456}]}-->
