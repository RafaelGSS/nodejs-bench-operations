## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,374,246|1687456|
|Using replaceAll()|3,022,806|1511555|
|Using replaceAll(//g)|3,097,732|1549083|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:04:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1687456,"opsSec":3374246.348925762},{"name":"Using replaceAll()","samples":1511555,"opsSec":3022806.6553065265},{"name":"Using replaceAll(//g)","samples":1549083,"opsSec":3097732.305086359}]}-->
