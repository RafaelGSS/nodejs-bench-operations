## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|708,468,772|84|
|Length = 10_000 - Array.at|749,618,951|88|
|Length = 1_000_000 - Array.at|733,550,195|83|
|Length = 100 - Array[length - 1]|784,302,691|90|
|Length = 10_000 - Array[length - 1]|777,380,375|87|
|Length = 1_000_000 - Array[length - 1]|774,149,947|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":708468771.8866978,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":749618951.4779851,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":733550194.8780358,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":784302690.6931503,"samples":10},{"name":"Length = 10_000 - Array[length - 1]","opsSec":777380374.94607,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":774149946.6115987,"samples":7}]}-->
