## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,717|859|
|{...smallObject} - Total keys: 2|38,478,479|19264644|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,036|520|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,879|3442|
|{ ...bigObject, ...anotherBigObject }|1,112|558|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,041,158|6020759|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,660,071|13830041|
|{ ...smallObject, ...anotherSmallObject }|20,287,050|10145591|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:18:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":859,"opsSec":1717.3093119332152},{"name":"{...smallObject} - Total keys: 2","samples":19264644,"opsSec":38478479.476559974},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":520,"opsSec":1036.7652199402212},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3442,"opsSec":6879.772792405433},{"name":"{ ...bigObject, ...anotherBigObject }","samples":558,"opsSec":1112.5405595801478},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6020759,"opsSec":12041158.065703101},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13830041,"opsSec":27660071.544492956},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10145591,"opsSec":20287050.9478155}]}-->
