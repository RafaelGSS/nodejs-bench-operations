## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,135,310|89|
|Using replaceAll()|2,037,161|92|
|Using replaceAll(//g)|1,973,956|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:30:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":2135309.7996819536,"samples":6},{"name":"Using replaceAll()","opsSec":2037161.1466056737,"samples":7},{"name":"Using replaceAll(//g)","opsSec":1973955.9121667137,"samples":5}]}-->
