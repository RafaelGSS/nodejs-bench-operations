## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|123,354,469|83|
|Length = 10_000 - Array.at|124,113,653|81|
|Length = 1_000_000 - Array.at|126,047,875|82|
|Length = 100 - Array[length - 1]|131,331,412|80|
|Length = 10_000 - Array[length - 1]|126,133,335|79|
|Length = 1_000_000 - Array[length - 1]|132,020,294|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:42:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":123354468.56819975,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":124113652.99253123,"samples":4},{"name":"Length = 1_000_000 - Array.at","opsSec":126047875.34563816,"samples":4},{"name":"Length = 100 - Array[length - 1]","opsSec":131331412.20859241,"samples":5},{"name":"Length = 10_000 - Array[length - 1]","opsSec":126133335.46533895,"samples":5},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":132020293.60371327,"samples":5}]}-->
