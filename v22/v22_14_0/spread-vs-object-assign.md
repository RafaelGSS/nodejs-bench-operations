## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,735|869|
|{...smallObject} - Total keys: 2|40,100,953|20051465|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,057|530|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,626|3314|
|{ ...bigObject, ...anotherBigObject }|1,100|551|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,115,991|6061128|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,331,367|14166811|
|{ ...smallObject, ...anotherSmallObject }|20,370,740|10187821|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:51:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":869,"opsSec":1735.8519006314875},{"name":"{...smallObject} - Total keys: 2","samples":20051465,"opsSec":40100953.26360982},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":530,"opsSec":1057.9790547574767},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3314,"opsSec":6626.726674469501},{"name":"{ ...bigObject, ...anotherBigObject }","samples":551,"opsSec":1100.5443825810892},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6061128,"opsSec":12115991.935241543},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14166811,"opsSec":28331367.78639071},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10187821,"opsSec":20370740.107325014}]}-->
