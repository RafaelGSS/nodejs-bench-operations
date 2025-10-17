## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|3,036|1519|
|{...smallObject} - Total keys: 2|39,696,518|19889594|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,131|566|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,572|3287|
|{ ...bigObject, ...anotherBigObject }|1,542|772|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,112,271|6057569|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,796,793|13899362|
|{ ...smallObject, ...anotherSmallObject }|20,077,485|10042092|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:04:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1519,"opsSec":3036.8993365734455},{"name":"{...smallObject} - Total keys: 2","samples":19889594,"opsSec":39696518.01640494},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":566,"opsSec":1131.9974462137614},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3287,"opsSec":6572.204092654049},{"name":"{ ...bigObject, ...anotherBigObject }","samples":772,"opsSec":1542.4812113001055},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6057569,"opsSec":12112271.316073995},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13899362,"opsSec":27796793.901818633},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10042092,"opsSec":20077485.026655946}]}-->
