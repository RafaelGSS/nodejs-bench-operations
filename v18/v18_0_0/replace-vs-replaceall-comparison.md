## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,673,644|1336823|
|Using replaceAll()|2,453,114|1226558|
|Using replaceAll(//g)|2,379,046|1189524|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:00:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2673644.579619704,"samples":1336823},{"name":"Using replaceAll()","opsSec":2453114.4084552303,"samples":1226558},{"name":"Using replaceAll(//g)","opsSec":2379046.5020456435,"samples":1189524}]}-->
