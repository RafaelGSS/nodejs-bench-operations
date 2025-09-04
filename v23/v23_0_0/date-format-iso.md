## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,458,885|729730|
|fromUnixToISOString(new Date())|2,217,327|1109431|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:44:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":729730,"opsSec":1458885.4442277288},{"name":"fromUnixToISOString(new Date())","samples":1109431,"opsSec":2217327.94166356}]}-->
