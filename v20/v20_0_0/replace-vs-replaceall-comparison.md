## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,607,721|1303861|
|Using replaceAll()|2,263,069|1131535|
|Using replaceAll(//g)|2,367,999|1184000|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:01:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2607721.2869057464,"samples":1303861},{"name":"Using replaceAll()","opsSec":2263069.041315555,"samples":1131535},{"name":"Using replaceAll(//g)","opsSec":2367999.9240117096,"samples":1184000}]}-->
