## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,921,039|86|
|Using replaceAll()|1,717,939|85|
|Using replaceAll(//g)|1,706,094|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":1921039.0444206402,"samples":7},{"name":"Using replaceAll()","opsSec":1717939.103971522,"samples":8},{"name":"Using replaceAll(//g)","opsSec":1706093.5146477818,"samples":6}]}-->
