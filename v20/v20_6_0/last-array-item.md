## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|606,049,240|94|
|Length = 10_000 - Array.at|616,716,328|94|
|Length = 1_000_000 - Array.at|608,750,632|90|
|Length = 100 - Array[length - 1]|607,302,986|93|
|Length = 10_000 - Array[length - 1]|611,535,451|94|
|Length = 1_000_000 - Array[length - 1]|600,708,027|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:01:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":606049239.7999021,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":616716327.5848482,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":608750631.654489,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":607302985.7899483,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":611535451.1648036,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":600708027.1070099,"samples":7}]}-->
