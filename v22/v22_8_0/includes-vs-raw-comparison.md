## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|86,148,363|43084483|
|using Array.includes (first item)|81,962,536|40981856|
|Using raw comparison|98,052,306|49026161|
|Using raw comparison (first item)|98,119,436|49063924|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:23:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"using Array.includes","opsSec":86148363.10207397,"samples":43084483},{"name":"using Array.includes (first item)","opsSec":81962536.32937889,"samples":40981856},{"name":"Using raw comparison","opsSec":98052306.11552641,"samples":49026161},{"name":"Using raw comparison (first item)","opsSec":98119436.41695485,"samples":49063924}]}-->
