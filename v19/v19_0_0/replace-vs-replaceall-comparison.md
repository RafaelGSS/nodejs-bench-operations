## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,880,659|88|
|Using replaceAll()|1,604,861|85|
|Using replaceAll(//g)|1,600,456|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:25:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":1880659.3873529849,"samples":6},{"name":"Using replaceAll()","opsSec":1604861.314905843,"samples":5},{"name":"Using replaceAll(//g)","opsSec":1600456.265316177,"samples":5}]}-->
