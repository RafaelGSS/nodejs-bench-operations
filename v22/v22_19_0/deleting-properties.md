## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,040,063|2020734|
|Using delete property (proto: null)|18,006,912|9003459|
|Using delete property (cached proto: null)|4,075,069|2038333|
|Using undefined assignment|77,322,601|38663260|
|Using undefined assignment (proto: null)|19,071,367|9535785|
|Using undefined property (cached proto: null)|77,240,491|38620246|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:59:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2020734,"opsSec":4040063.4719339823},{"name":"Using delete property (proto: null)","samples":9003459,"opsSec":18006912.48988478},{"name":"Using delete property (cached proto: null)","samples":2038333,"opsSec":4075069.990688007},{"name":"Using undefined assignment","samples":38663260,"opsSec":77322601.90911606},{"name":"Using undefined assignment (proto: null)","samples":9535785,"opsSec":19071367.347650565},{"name":"Using undefined property (cached proto: null)","samples":38620246,"opsSec":77240491.38207607}]}-->
