## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,030,559|89|
|Using replaceAll()|1,897,827|97|
|Using replaceAll(//g)|1,813,136|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2030558.6863702452,"samples":10},{"name":"Using replaceAll()","opsSec":1897826.6590786756,"samples":6},{"name":"Using replaceAll(//g)","opsSec":1813135.862616253,"samples":6}]}-->
