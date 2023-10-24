## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,193,711|89|
|Using replaceAll()|2,061,722|97|
|Using replaceAll(//g)|2,007,925|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:25:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2193711.4978450923,"samples":5},{"name":"Using replaceAll()","opsSec":2061721.535319508,"samples":5},{"name":"Using replaceAll(//g)","opsSec":2007924.971239234,"samples":5}]}-->
