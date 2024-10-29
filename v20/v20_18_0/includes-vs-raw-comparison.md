## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|77,350,595|38748307|
|using Array.includes (first item)|73,508,985|36786647|
|Using raw comparison|97,666,529|48864719|
|Using raw comparison (first item)|98,183,655|49092563|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:55:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":77350595.41350815,"samples":38748307},{"name":"using Array.includes (first item)","opsSec":73508985.10543443,"samples":36786647},{"name":"Using raw comparison","opsSec":97666529.81614706,"samples":48864719},{"name":"Using raw comparison (first item)","opsSec":98183655.99430245,"samples":49092563}]}-->
