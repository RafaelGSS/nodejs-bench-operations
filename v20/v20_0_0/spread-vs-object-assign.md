## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,697|850|
|{...smallObject} - Total keys: 2|37,243,605|18645783|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,039|520|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,588|3295|
|{ ...bigObject, ...anotherBigObject }|1,092|547|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,104,457|6054717|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,705,863|14355307|
|{ ...smallObject, ...anotherSmallObject }|20,036,837|10021574|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:47:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":850,"opsSec":1697.786493880738},{"name":"{...smallObject} - Total keys: 2","samples":18645783,"opsSec":37243605.844522566},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":520,"opsSec":1039.804254769431},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3295,"opsSec":6588.7003129762625},{"name":"{ ...bigObject, ...anotherBigObject }","samples":547,"opsSec":1092.7794003787178},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6054717,"opsSec":12104457.32499757},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14355307,"opsSec":28705863.007437088},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10021574,"opsSec":20036837.558305714}]}-->
