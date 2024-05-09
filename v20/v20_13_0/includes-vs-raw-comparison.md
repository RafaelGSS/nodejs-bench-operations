## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|19,894,873|9947437|
|using Array.includes (first item)|19,925,966|9962984|
|Using raw comparison|19,918,442|9959222|
|Using raw comparison (first item)|19,932,608|9966305|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:42:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":19894873.960213903,"samples":9947437},{"name":"using Array.includes (first item)","opsSec":19925966.52546819,"samples":9962984},{"name":"Using raw comparison","opsSec":19918442.167477556,"samples":9959222},{"name":"Using raw comparison (first item)","opsSec":19932608.28581374,"samples":9966305}]}-->
