## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|132,386,004|66208172|
|Length = 10_000 - Array.at|86,770,303|43389558|
|Length = 1_000_000 - Array.at|99,193,056|49985508|
|Length = 100 - Array[length - 1]|98,222,323|49111170|
|Length = 10_000 - Array[length - 1]|97,918,678|48959364|
|Length = 1_000_000 - Array[length - 1]|99,309,669|49670135|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:08:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":132386004.30507739,"samples":66208172},{"name":"Length = 10_000 - Array.at","opsSec":86770303.08739662,"samples":43389558},{"name":"Length = 1_000_000 - Array.at","opsSec":99193056.16847903,"samples":49985508},{"name":"Length = 100 - Array[length - 1]","opsSec":98222323.89153887,"samples":49111170},{"name":"Length = 10_000 - Array[length - 1]","opsSec":97918678.84482321,"samples":48959364},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":99309669.91002998,"samples":49670135}]}-->
