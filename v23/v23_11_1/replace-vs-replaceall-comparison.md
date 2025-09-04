## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,234,692|1617668|
|Using replaceAll()|3,066,371|1540401|
|Using replaceAll(//g)|2,978,072|1489039|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:03:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1617668,"opsSec":3234692.6067017564},{"name":"Using replaceAll()","samples":1540401,"opsSec":3066371.300958618},{"name":"Using replaceAll(//g)","samples":1489039,"opsSec":2978072.72881127}]}-->
