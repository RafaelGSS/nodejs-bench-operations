## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|869,574,480|94|
|Length = 10_000 - Array.at|867,003,133|95|
|Length = 1_000_000 - Array.at|866,091,187|97|
|Length = 100 - Array[length - 1]|819,197,999|95|
|Length = 10_000 - Array[length - 1]|818,414,434|95|
|Length = 1_000_000 - Array[length - 1]|817,846,006|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:52:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":869574480.2461538,"samples":9},{"name":"Length = 10_000 - Array.at","opsSec":867003133.2834563,"samples":8},{"name":"Length = 1_000_000 - Array.at","opsSec":866091186.5296108,"samples":8},{"name":"Length = 100 - Array[length - 1]","opsSec":819197998.7777965,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":818414433.8758073,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":817846005.9767864,"samples":9}]}-->
