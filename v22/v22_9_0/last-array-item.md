## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|132,601,598|66312852|
|Length = 10_000 - Array.at|95,566,245|47783548|
|Length = 1_000_000 - Array.at|100,040,013|50020039|
|Length = 100 - Array[length - 1]|99,069,559|49542730|
|Length = 10_000 - Array[length - 1]|98,373,555|49192290|
|Length = 1_000_000 - Array[length - 1]|96,519,320|48260128|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:28:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":132601598.88574496,"samples":66312852},{"name":"Length = 10_000 - Array.at","opsSec":95566245.6515462,"samples":47783548},{"name":"Length = 1_000_000 - Array.at","opsSec":100040013.97439104,"samples":50020039},{"name":"Length = 100 - Array[length - 1]","opsSec":99069559.53383394,"samples":49542730},{"name":"Length = 10_000 - Array[length - 1]","opsSec":98373555.27566026,"samples":49192290},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":96519320.14867184,"samples":48260128}]}-->
