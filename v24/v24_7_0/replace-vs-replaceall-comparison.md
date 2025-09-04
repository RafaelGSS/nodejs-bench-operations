## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|4,012,468|2006629|
|Using replaceAll()|3,055,835|1527919|
|Using replaceAll(//g)|3,323,777|1662048|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:05:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":2006629,"opsSec":4012468.6110002836},{"name":"Using replaceAll()","samples":1527919,"opsSec":3055835.1580733033},{"name":"Using replaceAll(//g)","samples":1662048,"opsSec":3323777.0702949967}]}-->
