## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,277,064|1638737|
|Using replaceAll()|3,265,548|1632825|
|Using replaceAll(//g)|3,054,010|1527139|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:26:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1638737,"opsSec":3277064.0130754523},{"name":"Using replaceAll()","samples":1632825,"opsSec":3265548.4349125777},{"name":"Using replaceAll(//g)","samples":1527139,"opsSec":3054010.8717770674}]}-->
