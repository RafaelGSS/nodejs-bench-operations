## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|80,574,233|40287695|
|using Array.includes (first item)|90,273,421|45136719|
|Using raw comparison|105,020,926|52511355|
|Using raw comparison (first item)|105,357,732|52678881|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:54:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":80574233.75974554,"samples":40287695},{"name":"using Array.includes (first item)","opsSec":90273421.02859685,"samples":45136719},{"name":"Using raw comparison","opsSec":105020926.32458732,"samples":52511355},{"name":"Using raw comparison (first item)","opsSec":105357732.2891195,"samples":52678881}]}-->
