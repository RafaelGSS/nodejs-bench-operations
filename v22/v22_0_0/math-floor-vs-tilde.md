## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|120,343,673|60181462|
|~ (small)|94,831,117|47422078|
|Math.floor (long)|91,986,736|45993395|
|~ (long)|92,958,190|46479100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:14:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":120343673.82593481,"samples":60181462},{"name":"~ (small)","opsSec":94831117.10072312,"samples":47422078},{"name":"Math.floor (long)","opsSec":91986736.8316661,"samples":45993395},{"name":"~ (long)","opsSec":92958190.14643183,"samples":46479100}]}-->
