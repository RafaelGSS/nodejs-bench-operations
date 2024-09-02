## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,186,653|9093327|
|Length = 10_000 - Array.at|18,515,634|9257818|
|Length = 1_000_000 - Array.at|18,038,099|9019050|
|Length = 100 - Array[length - 1]|18,600,727|9300364|
|Length = 10_000 - Array[length - 1]|16,927,671|8463836|
|Length = 1_000_000 - Array[length - 1]|16,862,605|8431303|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:03:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":18186653.708859548,"samples":9093327},{"name":"Length = 10_000 - Array.at","opsSec":18515634.222614776,"samples":9257818},{"name":"Length = 1_000_000 - Array.at","opsSec":18038099.856015127,"samples":9019050},{"name":"Length = 100 - Array[length - 1]","opsSec":18600727.552303713,"samples":9300364},{"name":"Length = 10_000 - Array[length - 1]","opsSec":16927671.762459505,"samples":8463836},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":16862605.932414345,"samples":8431303}]}-->
