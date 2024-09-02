## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,558,626|1279314|
|Using replaceAll()|2,365,321|1182661|
|Using replaceAll(//g)|2,363,068|1181535|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:05:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2558626.188489816,"samples":1279314},{"name":"Using replaceAll()","opsSec":2365321.47489944,"samples":1182661},{"name":"Using replaceAll(//g)","opsSec":2363068.4214706155,"samples":1181535}]}-->
