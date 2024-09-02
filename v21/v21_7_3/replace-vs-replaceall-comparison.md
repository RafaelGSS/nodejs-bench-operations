## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,716,277|1358139|
|Using replaceAll()|2,489,052|1244527|
|Using replaceAll(//g)|2,448,090|1224046|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:03:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2716277.679479926,"samples":1358139},{"name":"Using replaceAll()","opsSec":2489052.735555684,"samples":1244527},{"name":"Using replaceAll(//g)","opsSec":2448090.4136382462,"samples":1224046}]}-->
