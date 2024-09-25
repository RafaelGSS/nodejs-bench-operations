## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,888,111|6944056|
|Length = 10_000 - Array.at|14,772,150|7386076|
|Length = 1_000_000 - Array.at|14,748,971|7374486|
|Length = 100 - Array[length - 1]|14,244,723|7122362|
|Length = 10_000 - Array[length - 1]|14,393,693|7196847|
|Length = 1_000_000 - Array[length - 1]|14,525,057|7262529|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:43:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":13888111.416781984,"samples":6944056},{"name":"Length = 10_000 - Array.at","opsSec":14772150.72972079,"samples":7386076},{"name":"Length = 1_000_000 - Array.at","opsSec":14748971.763969906,"samples":7374486},{"name":"Length = 100 - Array[length - 1]","opsSec":14244723.31633835,"samples":7122362},{"name":"Length = 10_000 - Array[length - 1]","opsSec":14393693.798214668,"samples":7196847},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":14525057.796732822,"samples":7262529}]}-->
