## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,587,910|1293956|
|Using replaceAll()|2,352,344|1176173|
|Using replaceAll(//g)|2,324,996|1162499|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:01:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2587910.991455389,"samples":1293956},{"name":"Using replaceAll()","opsSec":2352344.174878113,"samples":1176173},{"name":"Using replaceAll(//g)","opsSec":2324996.4110176875,"samples":1162499}]}-->
