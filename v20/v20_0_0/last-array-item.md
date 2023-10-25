## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|600,765,398|85|
|Length = 10_000 - Array.at|617,121,474|93|
|Length = 1_000_000 - Array.at|614,007,908|94|
|Length = 100 - Array[length - 1]|618,464,546|92|
|Length = 10_000 - Array[length - 1]|612,678,113|94|
|Length = 1_000_000 - Array[length - 1]|619,415,201|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":600765397.695439,"samples":8},{"name":"Length = 10_000 - Array.at","opsSec":617121474.1980244,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":614007907.5873208,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":618464545.9468133,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":612678112.8378412,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":619415200.5026866,"samples":10}]}-->
