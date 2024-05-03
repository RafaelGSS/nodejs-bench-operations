## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|909,383,778|99|
|using Array.includes (first item)|908,548,001|93|
|Using raw comparison|910,442,148|97|
|Using raw comparison (first item)|909,293,411|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:19:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":909383778.074399,"samples":6},{"name":"using Array.includes (first item)","opsSec":908548001.4001092,"samples":6},{"name":"Using raw comparison","opsSec":910442148.2248315,"samples":6},{"name":"Using raw comparison (first item)","opsSec":909293410.9049754,"samples":6}]}-->
