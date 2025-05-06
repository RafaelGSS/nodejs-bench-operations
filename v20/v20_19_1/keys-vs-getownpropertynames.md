## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|40,088,098|20066642|
|Using Object.getOwnPropertyNames()|40,024,354|20013938|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:52:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using Object.keys()","samples":20066642,"opsSec":40088098.85972266},{"name":"Using Object.getOwnPropertyNames()","samples":20013938,"opsSec":40024354.257068925}]}-->
