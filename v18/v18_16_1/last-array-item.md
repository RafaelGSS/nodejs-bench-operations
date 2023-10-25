## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,267,043|91|
|Length = 10_000 - Array.at|13,055,130|90|
|Length = 1_000_000 - Array.at|13,017,089|92|
|Length = 100 - Array[length - 1]|596,405,528|93|
|Length = 10_000 - Array[length - 1]|594,678,634|91|
|Length = 1_000_000 - Array[length - 1]|606,238,766|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":13267043.16107722,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":13055130.492993433,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":13017088.872294309,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":596405527.5786836,"samples":9},{"name":"Length = 10_000 - Array[length - 1]","opsSec":594678634.3247615,"samples":8},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":606238765.9463577,"samples":8}]}-->
