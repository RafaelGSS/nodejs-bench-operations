## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,346,188|1673205|
|Using replaceAll()|2,824,360|1412192|
|Using replaceAll(//g)|2,983,304|1492287|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:05:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1673205,"opsSec":3346188.636236958},{"name":"Using replaceAll()","samples":1412192,"opsSec":2824360.5747533934},{"name":"Using replaceAll(//g)","samples":1492287,"opsSec":2983304.1565857492}]}-->
