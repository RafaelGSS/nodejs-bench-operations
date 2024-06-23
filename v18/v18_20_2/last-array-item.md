## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|9,788,863|4894432|
|Length = 10_000 - Array.at|9,015,006|4507504|
|Length = 1_000_000 - Array.at|9,217,569|4608785|
|Length = 100 - Array[length - 1]|16,890,436|8445219|
|Length = 10_000 - Array[length - 1]|16,903,863|8451932|
|Length = 1_000_000 - Array[length - 1]|16,449,296|8224649|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:48:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":9788863.890673853,"samples":4894432},{"name":"Length = 10_000 - Array.at","opsSec":9015006.731231516,"samples":4507504},{"name":"Length = 1_000_000 - Array.at","opsSec":9217569.447585462,"samples":4608785},{"name":"Length = 100 - Array[length - 1]","opsSec":16890436.830598712,"samples":8445219},{"name":"Length = 10_000 - Array[length - 1]","opsSec":16903863.998425707,"samples":8451932},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":16449296.059282336,"samples":8224649}]}-->
