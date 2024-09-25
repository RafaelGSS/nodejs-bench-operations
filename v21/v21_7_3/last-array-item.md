## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,686,678|7343340|
|Length = 10_000 - Array.at|14,865,304|7432653|
|Length = 1_000_000 - Array.at|14,997,965|7498983|
|Length = 100 - Array[length - 1]|14,098,997|7049499|
|Length = 10_000 - Array[length - 1]|14,298,025|7149013|
|Length = 1_000_000 - Array[length - 1]|13,969,452|6984833|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:45:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":14686678.590196993,"samples":7343340},{"name":"Length = 10_000 - Array.at","opsSec":14865304.721627275,"samples":7432653},{"name":"Length = 1_000_000 - Array.at","opsSec":14997965.9400976,"samples":7498983},{"name":"Length = 100 - Array[length - 1]","opsSec":14098997.80259037,"samples":7049499},{"name":"Length = 10_000 - Array[length - 1]","opsSec":14298025.199158225,"samples":7149013},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":13969452.322778368,"samples":6984833}]}-->
