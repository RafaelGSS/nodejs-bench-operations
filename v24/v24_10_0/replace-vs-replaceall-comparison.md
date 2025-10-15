## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|4,027,751|2014148|
|Using replaceAll()|3,081,048|1540527|
|Using replaceAll(//g)|3,306,749|1653376|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:26:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":2014148,"opsSec":4027751.657419003},{"name":"Using replaceAll()","samples":1540527,"opsSec":3081048.922431376},{"name":"Using replaceAll(//g)","samples":1653376,"opsSec":3306749.3215330495}]}-->
