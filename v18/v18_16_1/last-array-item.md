## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,619,807|81|
|Length = 10_000 - Array.at|14,824,784|86|
|Length = 1_000_000 - Array.at|14,882,693|88|
|Length = 100 - Array[length - 1]|669,220,542|89|
|Length = 10_000 - Array[length - 1]|686,143,373|87|
|Length = 1_000_000 - Array[length - 1]|694,245,635|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:32:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":14619806.511078587,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":14824783.573885597,"samples":9},{"name":"Length = 1_000_000 - Array.at","opsSec":14882693.205218535,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":669220542.2435826,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":686143373.2461807,"samples":8},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":694245634.6270293,"samples":7}]}-->
