## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,568,697|8284349|
|Length = 10_000 - Array.at|16,822,890|8411446|
|Length = 1_000_000 - Array.at|17,909,527|8954765|
|Length = 100 - Array[length - 1]|17,589,548|8794775|
|Length = 10_000 - Array[length - 1]|16,687,683|8343842|
|Length = 1_000_000 - Array[length - 1]|17,788,731|8894366|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:41:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":16568697.63590058,"samples":8284349},{"name":"Length = 10_000 - Array.at","opsSec":16822890.284155432,"samples":8411446},{"name":"Length = 1_000_000 - Array.at","opsSec":17909527.600185037,"samples":8954765},{"name":"Length = 100 - Array[length - 1]","opsSec":17589548.276276156,"samples":8794775},{"name":"Length = 10_000 - Array[length - 1]","opsSec":16687683.3660973,"samples":8343842},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":17788731.644096594,"samples":8894366}]}-->
