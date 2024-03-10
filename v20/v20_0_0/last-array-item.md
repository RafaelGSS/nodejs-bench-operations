## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|906,191,607|99|
|Length = 10_000 - Array.at|906,374,203|100|
|Length = 1_000_000 - Array.at|906,330,287|97|
|Length = 100 - Array[length - 1]|825,645,769|97|
|Length = 10_000 - Array[length - 1]|824,096,684|100|
|Length = 1_000_000 - Array[length - 1]|825,989,114|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:56:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":906191606.7099653,"samples":9},{"name":"Length = 10_000 - Array.at","opsSec":906374203.1624742,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":906330286.7522161,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":825645769.1473738,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":824096683.8783512,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":825989114.1311703,"samples":8}]}-->
