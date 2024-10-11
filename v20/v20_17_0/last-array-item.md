## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|132,456,032|66228045|
|Length = 10_000 - Array.at|95,082,559|47572254|
|Length = 1_000_000 - Array.at|96,724,232|48363839|
|Length = 100 - Array[length - 1]|96,080,728|48042617|
|Length = 10_000 - Array[length - 1]|96,345,670|48174562|
|Length = 1_000_000 - Array[length - 1]|96,450,244|48240266|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:28:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":132456032.77899384,"samples":66228045},{"name":"Length = 10_000 - Array.at","opsSec":95082559.62059087,"samples":47572254},{"name":"Length = 1_000_000 - Array.at","opsSec":96724232.48939027,"samples":48363839},{"name":"Length = 100 - Array[length - 1]","opsSec":96080728.77462776,"samples":48042617},{"name":"Length = 10_000 - Array[length - 1]","opsSec":96345670.9711524,"samples":48174562},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":96450244.11564134,"samples":48240266}]}-->
