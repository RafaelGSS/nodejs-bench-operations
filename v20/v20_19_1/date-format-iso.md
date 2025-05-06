## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,459,202|730320|
|fromUnixToISOString(new Date())|2,099,626|1049867|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:30:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":730320,"opsSec":1459202.8981889072},{"name":"fromUnixToISOString(new Date())","samples":1049867,"opsSec":2099626.8308473}]}-->
