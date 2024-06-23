## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,839,886|7919944|
|Length = 10_000 - Array.at|15,873,280|7936641|
|Length = 1_000_000 - Array.at|15,916,969|7958486|
|Length = 100 - Array[length - 1]|15,343,408|7671705|
|Length = 10_000 - Array[length - 1]|15,366,624|7683313|
|Length = 1_000_000 - Array[length - 1]|15,405,913|7702957|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:54:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15839886.384299895,"samples":7919944},{"name":"Length = 10_000 - Array.at","opsSec":15873280.825353088,"samples":7936641},{"name":"Length = 1_000_000 - Array.at","opsSec":15916969.867121493,"samples":7958486},{"name":"Length = 100 - Array[length - 1]","opsSec":15343408.43494178,"samples":7671705},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15366624.770675976,"samples":7683313},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15405913.322218722,"samples":7702957}]}-->
