## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,643,866|87|
|Using replaceAll()|1,638,051|98|
|Using replaceAll(//g)|1,554,585|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:25:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":1643865.6625224315,"samples":3},{"name":"Using replaceAll()","opsSec":1638050.9744669127,"samples":7},{"name":"Using replaceAll(//g)","opsSec":1554585.1115689604,"samples":5}]}-->
