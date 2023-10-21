## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,697,665|90|
|Using replaceAll()|1,638,665|98|
|Using replaceAll(//g)|1,559,961|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:30:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":1697665.285439036,"samples":6},{"name":"Using replaceAll()","opsSec":1638664.7801619328,"samples":9},{"name":"Using replaceAll(//g)","opsSec":1559960.6055223013,"samples":8}]}-->
