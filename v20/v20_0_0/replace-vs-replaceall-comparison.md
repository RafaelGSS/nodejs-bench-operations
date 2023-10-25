## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,195,780|92|
|Using replaceAll()|2,047,612|97|
|Using replaceAll(//g)|2,000,399|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2195780.3703574035,"samples":5},{"name":"Using replaceAll()","opsSec":2047611.5455181848,"samples":5},{"name":"Using replaceAll(//g)","opsSec":2000399.048570219,"samples":5}]}-->
