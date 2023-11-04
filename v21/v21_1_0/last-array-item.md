## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|469,054,888|95|
|Length = 10_000 - Array.at|475,155,531|94|
|Length = 1_000_000 - Array.at|477,175,162|97|
|Length = 100 - Array[length - 1]|709,210,387|95|
|Length = 10_000 - Array[length - 1]|709,904,119|94|
|Length = 1_000_000 - Array[length - 1]|708,776,444|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:22:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":469054888.413436,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":475155531.2872154,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":477175162.13329935,"samples":8},{"name":"Length = 100 - Array[length - 1]","opsSec":709210387.0663595,"samples":9},{"name":"Length = 10_000 - Array[length - 1]","opsSec":709904118.8204696,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":708776444.4857594,"samples":6}]}-->
