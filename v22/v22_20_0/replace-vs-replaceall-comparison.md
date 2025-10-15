## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,405,288|1703005|
|Using replaceAll()|3,209,756|1604895|
|Using replaceAll(//g)|3,083,328|1541665|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:27:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1703005,"opsSec":3405288.4193839324},{"name":"Using replaceAll()","samples":1604895,"opsSec":3209756.509400581},{"name":"Using replaceAll(//g)","samples":1541665,"opsSec":3083328.2918361262}]}-->
