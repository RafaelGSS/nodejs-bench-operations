## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,401,060|1700975|
|Using replaceAll()|3,043,334|1521668|
|Using replaceAll(//g)|3,096,421|1548393|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:28:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1700975,"opsSec":3401060.0378177846},{"name":"Using replaceAll()","samples":1521668,"opsSec":3043334.9470061082},{"name":"Using replaceAll(//g)","samples":1548393,"opsSec":3096421.9041339806}]}-->
