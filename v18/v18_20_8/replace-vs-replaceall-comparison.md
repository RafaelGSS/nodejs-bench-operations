## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,283,779|1644988|
|Using replaceAll()|2,860,515|1430435|
|Using replaceAll(//g)|2,953,107|1476900|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:01:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1644988,"opsSec":3283779.1475328994},{"name":"Using replaceAll()","samples":1430435,"opsSec":2860515.4391113217},{"name":"Using replaceAll(//g)","samples":1476900,"opsSec":2953107.4372438174}]}-->
