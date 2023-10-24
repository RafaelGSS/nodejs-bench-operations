## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,723,174|83|
|Using replaceAll()|1,618,899|89|
|Using replaceAll(//g)|1,595,479|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:25:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":1723174.165507909,"samples":3},{"name":"Using replaceAll()","opsSec":1618898.8210337749,"samples":7},{"name":"Using replaceAll(//g)","opsSec":1595479.3580818225,"samples":4}]}-->
