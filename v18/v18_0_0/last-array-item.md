## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|8,669,216|4334609|
|Length = 10_000 - Array.at|8,810,807|4405404|
|Length = 1_000_000 - Array.at|8,847,393|4423697|
|Length = 100 - Array[length - 1]|16,427,464|8213733|
|Length = 10_000 - Array[length - 1]|16,168,950|8084476|
|Length = 1_000_000 - Array[length - 1]|16,710,297|8355149|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:37:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":8669216.915263796,"samples":4334609},{"name":"Length = 10_000 - Array.at","opsSec":8810807.995289925,"samples":4405404},{"name":"Length = 1_000_000 - Array.at","opsSec":8847393.592411172,"samples":4423697},{"name":"Length = 100 - Array[length - 1]","opsSec":16427464.551281659,"samples":8213733},{"name":"Length = 10_000 - Array[length - 1]","opsSec":16168950.999452423,"samples":8084476},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":16710297.601066327,"samples":8355149}]}-->
