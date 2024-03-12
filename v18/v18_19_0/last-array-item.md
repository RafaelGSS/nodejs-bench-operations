## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|23,444,562|97|
|Length = 10_000 - Array.at|23,602,276|93|
|Length = 1_000_000 - Array.at|23,576,737|91|
|Length = 100 - Array[length - 1]|817,237,566|97|
|Length = 10_000 - Array[length - 1]|816,907,262|95|
|Length = 1_000_000 - Array[length - 1]|818,255,571|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:52:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":23444561.89077845,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":23602275.709243037,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":23576736.666390363,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":817237565.8396883,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":816907261.5225508,"samples":9},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":818255570.5049819,"samples":6}]}-->
