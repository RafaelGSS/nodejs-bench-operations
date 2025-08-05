## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|3,161|1582|
|{...smallObject} - Total keys: 2|40,418,195|20209569|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,133|567|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,621|3311|
|{ ...bigObject, ...anotherBigObject }|1,542|772|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,167,913|6084175|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,953,228|12976617|
|{ ...smallObject, ...anotherSmallObject }|19,763,967|9884418|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:40:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1582,"opsSec":3161.8251954521616},{"name":"{...smallObject} - Total keys: 2","samples":20209569,"opsSec":40418195.28601315},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":567,"opsSec":1133.7730345113132},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3311,"opsSec":6621.401266411886},{"name":"{ ...bigObject, ...anotherBigObject }","samples":772,"opsSec":1542.7652694153373},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6084175,"opsSec":12167913.634281246},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":12976617,"opsSec":25953228.75744779},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9884418,"opsSec":19763967.50235721}]}-->
