## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,714,127|1357064|
|Using delete property (proto: null)|8,024,286|4012144|
|Using delete property (cached proto: null)|2,690,617|1345309|
|Using undefined assignment|14,326,583|7163292|
|Using undefined assignment (proto: null)|8,415,404|4207703|
|Using undefined property (cached proto: null)|14,272,645|7136323|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:17:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using delete property","opsSec":2714127.7708386653,"samples":1357064},{"name":"Using delete property (proto: null)","opsSec":8024286.491460019,"samples":4012144},{"name":"Using delete property (cached proto: null)","opsSec":2690617.7793488684,"samples":1345309},{"name":"Using undefined assignment","opsSec":14326583.30814251,"samples":7163292},{"name":"Using undefined assignment (proto: null)","opsSec":8415404.75556867,"samples":4207703},{"name":"Using undefined property (cached proto: null)","opsSec":14272645.014738021,"samples":7136323}]}-->
