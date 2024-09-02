## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|948,958|474480|
|Using brackets {}|965,361|482681|
|Using '' + |965,157|482579|
|Using date.toString()|1,055,012|527507|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:11:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using String()","opsSec":948958.5969172436,"samples":474480},{"name":"Using brackets {}","opsSec":965361.8901911031,"samples":482681},{"name":"Using '' + ","opsSec":965157.9530707193,"samples":482579},{"name":"Using date.toString()","opsSec":1055012.2403607937,"samples":527507}]}-->
