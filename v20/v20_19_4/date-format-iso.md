## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,426,844|713423|
|fromUnixToISOString(new Date())|2,122,790|1061800|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:45:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":713423,"opsSec":1426844.5103743311},{"name":"fromUnixToISOString(new Date())","samples":1061800,"opsSec":2122790.779418141}]}-->
