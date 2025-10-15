## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,803|902|
|{...smallObject} - Total keys: 2|37,962,633|18981376|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,088|545|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,442|3222|
|{ ...bigObject, ...anotherBigObject }|1,132|567|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,291,997|6146614|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,175,508|13587758|
|{ ...smallObject, ...anotherSmallObject }|20,194,622|10099113|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:40:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":902,"opsSec":1803.4746081701985},{"name":"{...smallObject} - Total keys: 2","samples":18981376,"opsSec":37962633.55658331},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":545,"opsSec":1088.6341625660832},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3222,"opsSec":6442.09097652838},{"name":"{ ...bigObject, ...anotherBigObject }","samples":567,"opsSec":1132.81304755128},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6146614,"opsSec":12291997.423553934},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13587758,"opsSec":27175508.499559656},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10099113,"opsSec":20194622.794622492}]}-->
