## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,315,157|657638|
|fromUnixToISOString(new Date())|2,186,453|1093227|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:30:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":657638,"opsSec":1315157.2833823438},{"name":"fromUnixToISOString(new Date())","samples":1093227,"opsSec":2186453.169147796}]}-->
