## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|88,904,854|44462735|
|Using dot notation|64,741,297|32394772|
|Using define property (writable)|4,847,956|2423979|
|Using define property initialized (writable)|7,011,346|3506085|
|Using define property (getter)|2,364,915|1185291|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 17:58:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":44462735,"opsSec":88904854.03120841},{"name":"Using dot notation","samples":32394772,"opsSec":64741297.61967046},{"name":"Using define property (writable)","samples":2423979,"opsSec":4847956.080209393},{"name":"Using define property initialized (writable)","samples":3506085,"opsSec":7011346.012593907},{"name":"Using define property (getter)","samples":1185291,"opsSec":2364915.9074370353}]}-->
