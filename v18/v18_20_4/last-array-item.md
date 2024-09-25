## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|8,232,365|4116183|
|Length = 10_000 - Array.at|8,132,501|4066251|
|Length = 1_000_000 - Array.at|8,176,705|4088353|
|Length = 100 - Array[length - 1]|14,017,101|7008551|
|Length = 10_000 - Array[length - 1]|14,220,367|7110308|
|Length = 1_000_000 - Array[length - 1]|13,824,546|6912274|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:36:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":8232365.995445808,"samples":4116183},{"name":"Length = 10_000 - Array.at","opsSec":8132501.072156929,"samples":4066251},{"name":"Length = 1_000_000 - Array.at","opsSec":8176705.206699349,"samples":4088353},{"name":"Length = 100 - Array[length - 1]","opsSec":14017101.17887555,"samples":7008551},{"name":"Length = 10_000 - Array[length - 1]","opsSec":14220367.880787594,"samples":7110308},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":13824546.691141821,"samples":6912274}]}-->
