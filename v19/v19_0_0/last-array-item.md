## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|472,441,049|96|
|Length = 10_000 - Array.at|472,266,731|93|
|Length = 1_000_000 - Array.at|474,481,590|90|
|Length = 100 - Array[length - 1]|591,187,911|98|
|Length = 10_000 - Array[length - 1]|589,868,345|97|
|Length = 1_000_000 - Array[length - 1]|588,786,883|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":472441049.1333834,"samples":9},{"name":"Length = 10_000 - Array.at","opsSec":472266730.88890564,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":474481589.9106997,"samples":8},{"name":"Length = 100 - Array[length - 1]","opsSec":591187910.600039,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":589868344.6773887,"samples":11},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":588786882.6116095,"samples":6}]}-->
