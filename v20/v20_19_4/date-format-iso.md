## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,384,190|692096|
|fromUnixToISOString(new Date())|2,146,796|1073548|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:18:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":692096,"opsSec":1384190.8898789063},{"name":"fromUnixToISOString(new Date())","samples":1073548,"opsSec":2146796.423146336}]}-->
