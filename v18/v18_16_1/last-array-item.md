## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,515,714|94|
|Length = 10_000 - Array.at|15,542,850|94|
|Length = 1_000_000 - Array.at|15,591,897|94|
|Length = 100 - Array[length - 1]|710,835,340|97|
|Length = 10_000 - Array[length - 1]|709,730,341|98|
|Length = 1_000_000 - Array[length - 1]|709,622,203|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:01:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15515714.16251909,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":15542850.408344315,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":15591897.194039462,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":710835340.2584237,"samples":8},{"name":"Length = 10_000 - Array[length - 1]","opsSec":709730341.198901,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":709622202.9429415,"samples":7}]}-->
