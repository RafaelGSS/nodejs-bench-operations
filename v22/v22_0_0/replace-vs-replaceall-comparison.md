## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,530,127|94|
|Using replaceAll()|3,383,913|94|
|Using replaceAll(//g)|3,304,830|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:19:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":3530126.5943052834,"samples":5},{"name":"Using replaceAll()","opsSec":3383912.537704193,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3304830.1016185507,"samples":6}]}-->
