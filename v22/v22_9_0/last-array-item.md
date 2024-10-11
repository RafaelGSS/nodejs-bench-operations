## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|131,081,537|65540792|
|Length = 10_000 - Array.at|97,857,346|49008243|
|Length = 1_000_000 - Array.at|97,742,413|48871227|
|Length = 100 - Array[length - 1]|98,712,758|49366822|
|Length = 10_000 - Array[length - 1]|98,323,969|49162033|
|Length = 1_000_000 - Array[length - 1]|96,703,460|48354152|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:17:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":131081537.07280971,"samples":65540792},{"name":"Length = 10_000 - Array.at","opsSec":97857346.27348153,"samples":49008243},{"name":"Length = 1_000_000 - Array.at","opsSec":97742413.92561029,"samples":48871227},{"name":"Length = 100 - Array[length - 1]","opsSec":98712758.74935484,"samples":49366822},{"name":"Length = 10_000 - Array[length - 1]","opsSec":98323969.44586201,"samples":49162033},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":96703460.12368241,"samples":48354152}]}-->
