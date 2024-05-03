## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|131,131,679|85|
|Length = 10_000 - Array.at|129,874,951|83|
|Length = 1_000_000 - Array.at|128,233,539|83|
|Length = 100 - Array[length - 1]|138,662,777|86|
|Length = 10_000 - Array[length - 1]|137,770,527|85|
|Length = 1_000_000 - Array[length - 1]|140,628,378|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:43:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":131131678.54073644,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":129874950.73540103,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":128233538.99886686,"samples":4},{"name":"Length = 100 - Array[length - 1]","opsSec":138662776.63819444,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":137770526.9366006,"samples":5},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":140628378.05939806,"samples":4}]}-->
