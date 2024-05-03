## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|26,399,596|95|
|Length = 10_000 - Array.at|26,454,975|97|
|Length = 1_000_000 - Array.at|26,437,618|95|
|Length = 100 - Array[length - 1]|908,868,726|98|
|Length = 10_000 - Array[length - 1]|907,656,690|99|
|Length = 1_000_000 - Array[length - 1]|906,528,922|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:36:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":26399595.976020604,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":26454975.021592163,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":26437617.581210673,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":908868725.6214248,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":907656690.1643428,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":906528922.1848562,"samples":6}]}-->
