## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,489,653|1745072|
|Using replaceAll()|3,038,477|1519363|
|Using replaceAll(//g)|3,177,382|1588897|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:27:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1745072,"opsSec":3489653.2221501432},{"name":"Using replaceAll()","samples":1519363,"opsSec":3038477.0271923915},{"name":"Using replaceAll(//g)","samples":1588897,"opsSec":3177382.5861479803}]}-->
