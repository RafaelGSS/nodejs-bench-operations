## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,407,354|1703875|
|Using replaceAll()|3,227,782|1614023|
|Using replaceAll(//g)|2,943,005|1471674|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:37:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using replace(//g)","opsSec":3407354.9648947897,"samples":1703875},{"name":"Using replaceAll()","opsSec":3227782.593573669,"samples":1614023},{"name":"Using replaceAll(//g)","opsSec":2943005.4694794184,"samples":1471674}]}-->
