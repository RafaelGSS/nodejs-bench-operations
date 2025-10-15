## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,780|891|
|{...smallObject} - Total keys: 2|38,592,540|19299979|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,064|533|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,822|3413|
|{ ...bigObject, ...anotherBigObject }|1,116|559|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,239,159|6119857|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,583,996|14292898|
|{ ...smallObject, ...anotherSmallObject }|21,204,138|10602289|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:41:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":891,"opsSec":1780.3121501416883},{"name":"{...smallObject} - Total keys: 2","samples":19299979,"opsSec":38592540.51371326},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":533,"opsSec":1064.3472156540051},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3413,"opsSec":6822.293802536359},{"name":"{ ...bigObject, ...anotherBigObject }","samples":559,"opsSec":1116.4218015800068},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6119857,"opsSec":12239159.810843766},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14292898,"opsSec":28583996.122932132},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10602289,"opsSec":21204138.650247168}]}-->
