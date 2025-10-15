## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,516,231|1758162|
|Using replaceAll()|3,048,841|1524421|
|Using replaceAll(//g)|3,113,466|1556915|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:25:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1758162,"opsSec":3516231.473884996},{"name":"Using replaceAll()","samples":1524421,"opsSec":3048841.2621804145},{"name":"Using replaceAll(//g)","samples":1556915,"opsSec":3113466.44052374}]}-->
