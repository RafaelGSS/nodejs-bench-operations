## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|900,574,057|97|
|Length = 10_000 - Array[length - 1]|902,487,569|95|
|Length = 1_000_000 - Array[length - 1]|901,162,543|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:56:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":0,"samples":0},{"name":"Length = 10_000 - Array.at","opsSec":0,"samples":0},{"name":"Length = 1_000_000 - Array.at","opsSec":0,"samples":0},{"name":"Length = 100 - Array[length - 1]","opsSec":900574057.4522367,"samples":9},{"name":"Length = 10_000 - Array[length - 1]","opsSec":902487568.7050117,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":901162543.4276586,"samples":7}]}-->
