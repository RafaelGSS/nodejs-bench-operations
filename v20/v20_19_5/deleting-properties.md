## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,712,236|1856370|
|Using delete property (proto: null)|17,224,324|8612618|
|Using delete property (cached proto: null)|3,745,709|1873224|
|Using undefined assignment|84,671,399|42340792|
|Using undefined assignment (proto: null)|18,345,933|9173141|
|Using undefined property (cached proto: null)|82,981,516|41509033|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:58:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1856370,"opsSec":3712236.063954318},{"name":"Using delete property (proto: null)","samples":8612618,"opsSec":17224324.1442798},{"name":"Using delete property (cached proto: null)","samples":1873224,"opsSec":3745709.158868413},{"name":"Using undefined assignment","samples":42340792,"opsSec":84671399.55471876},{"name":"Using undefined assignment (proto: null)","samples":9173141,"opsSec":18345933.61072073},{"name":"Using undefined property (cached proto: null)","samples":41509033,"opsSec":82981516.12736958}]}-->
