## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|107,640,667|53881277|
|Length = 10_000 - Array.at|79,718,392|39908921|
|Length = 1_000_000 - Array.at|82,343,565|41338313|
|Length = 100 - Array[length - 1]|80,823,384|40411697|
|Length = 10_000 - Array[length - 1]|80,949,786|40476656|
|Length = 1_000_000 - Array[length - 1]|81,024,745|40628956|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:20:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":107640667.30565776,"samples":53881277},{"name":"Length = 10_000 - Array.at","opsSec":79718392.98587655,"samples":39908921},{"name":"Length = 1_000_000 - Array.at","opsSec":82343565.38173804,"samples":41338313},{"name":"Length = 100 - Array[length - 1]","opsSec":80823384.78613412,"samples":40411697},{"name":"Length = 10_000 - Array[length - 1]","opsSec":80949786.47489946,"samples":40476656},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":81024745.3078831,"samples":40628956}]}-->
