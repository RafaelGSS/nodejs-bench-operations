## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,208,502|1608379|
|Using replaceAll()|3,153,183|1579907|
|Using replaceAll(//g)|2,877,849|1440275|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:39:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":3208502.804631929,"samples":1608379},{"name":"Using replaceAll()","opsSec":3153183.699732694,"samples":1579907},{"name":"Using replaceAll(//g)","opsSec":2877849.6216088566,"samples":1440275}]}-->
