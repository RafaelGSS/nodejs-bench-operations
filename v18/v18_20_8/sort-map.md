## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|256,965|128483|
|Sort using first char|1,298,928|649511|
|Sort using localeCompare|1,174,715|587367|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:13:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":128483,"opsSec":256965.78774625933},{"name":"Sort using first char","samples":649511,"opsSec":1298928.0797062686},{"name":"Sort using localeCompare","samples":587367,"opsSec":1174715.653290927}]}-->
