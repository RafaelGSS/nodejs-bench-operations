## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,673|839|
|{...smallObject} - Total keys: 2|37,841,949|18921239|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,033|517|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,439|3221|
|{ ...bigObject, ...anotherBigObject }|1,080|541|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,243,910|5146924|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,668,047|13336397|
|{ ...smallObject, ...anotherSmallObject }|19,378,588|9694808|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:51:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":839,"opsSec":1673.67361729888},{"name":"{...smallObject} - Total keys: 2","samples":18921239,"opsSec":37841949.120919086},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":517,"opsSec":1033.3980187857087},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3221,"opsSec":6439.955352815214},{"name":"{ ...bigObject, ...anotherBigObject }","samples":541,"opsSec":1080.2276208519975},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5146924,"opsSec":10243910.452642117},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13336397,"opsSec":26668047.88751746},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9694808,"opsSec":19378588.26553291}]}-->
