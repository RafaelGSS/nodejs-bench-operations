## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,564,244|1282123|
|Using replaceAll()|2,349,328|1174665|
|Using replaceAll(//g)|2,328,646|1164324|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:00:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2564244.2686090865,"samples":1282123},{"name":"Using replaceAll()","opsSec":2349328.8269435614,"samples":1174665},{"name":"Using replaceAll(//g)","opsSec":2328646.1616101293,"samples":1164324}]}-->
