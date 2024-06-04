## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,766,252|7883127|
|Length = 10_000 - Array.at|15,764,748|7882375|
|Length = 1_000_000 - Array.at|15,881,509|7940755|
|Length = 100 - Array[length - 1]|15,991,144|7995573|
|Length = 10_000 - Array[length - 1]|15,990,140|7995071|
|Length = 1_000_000 - Array[length - 1]|15,987,786|7993894|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:24:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15766252.45490053,"samples":7883127},{"name":"Length = 10_000 - Array.at","opsSec":15764748.991059825,"samples":7882375},{"name":"Length = 1_000_000 - Array.at","opsSec":15881509.237614444,"samples":7940755},{"name":"Length = 100 - Array[length - 1]","opsSec":15991144.496895902,"samples":7995573},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15990140.97665006,"samples":7995071},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15987786.944704153,"samples":7993894}]}-->
