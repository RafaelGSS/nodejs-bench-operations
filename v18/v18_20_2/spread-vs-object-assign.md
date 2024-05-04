## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,108|93|
|{...smallObject} - Total keys: 2|115,039,908|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,409|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,512|98|
|{ ...bigObject, ...anotherBigObject }|1,301|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,695,711|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|37,115,007|100|
|{ ...smallObject, ...anotherSmallObject }|25,194,598|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:46:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2107.506980874691,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":115039907.7869689,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2408.818169318467,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6512.060866526934,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1300.9708995742615,"samples":5},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14695711.046768475,"samples":7},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":37115006.50037351,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":25194597.712129273,"samples":6}]}-->
