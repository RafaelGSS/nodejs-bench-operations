## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|84,540,089|42280369|
|using Array.includes (first item)|81,952,860|40993799|
|Using raw comparison|95,678,074|47839047|
|Using raw comparison (first item)|96,095,092|48047565|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:58:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":84540089.25228031,"samples":42280369},{"name":"using Array.includes (first item)","opsSec":81952860.96863267,"samples":40993799},{"name":"Using raw comparison","opsSec":95678074.48167281,"samples":47839047},{"name":"Using raw comparison (first item)","opsSec":96095092.90729414,"samples":48047565}]}-->
