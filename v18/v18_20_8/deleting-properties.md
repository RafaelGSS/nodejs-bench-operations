## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,098,547|1549275|
|Using delete property (proto: null)|17,522,296|8761302|
|Using delete property (cached proto: null)|3,334,940|1667497|
|Using undefined assignment|85,434,737|42721551|
|Using undefined assignment (proto: null)|19,727,601|9865322|
|Using undefined property (cached proto: null)|84,966,579|42483301|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:58:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1549275,"opsSec":3098547.1865191543},{"name":"Using delete property (proto: null)","samples":8761302,"opsSec":17522296.69396058},{"name":"Using delete property (cached proto: null)","samples":1667497,"opsSec":3334940.2941215034},{"name":"Using undefined assignment","samples":42721551,"opsSec":85434737.42659752},{"name":"Using undefined assignment (proto: null)","samples":9865322,"opsSec":19727601.964321896},{"name":"Using undefined property (cached proto: null)","samples":42483301,"opsSec":84966579.22895677}]}-->
