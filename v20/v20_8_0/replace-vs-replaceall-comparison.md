## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,247,658|94|
|Using replaceAll()|2,073,252|96|
|Using replaceAll(//g)|1,972,821|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2247657.7098216037,"samples":5},{"name":"Using replaceAll()","opsSec":2073252.0538909072,"samples":5},{"name":"Using replaceAll(//g)","opsSec":1972821.4983761872,"samples":5}]}-->
