## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,645,686|9322844|
|Length = 10_000 - Array.at|19,351,232|9675617|
|Length = 1_000_000 - Array.at|18,234,563|9117282|
|Length = 100 - Array[length - 1]|18,814,818|9407410|
|Length = 10_000 - Array[length - 1]|19,006,003|9503002|
|Length = 1_000_000 - Array[length - 1]|19,206,307|9603154|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:01:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":18645686.54553543,"samples":9322844},{"name":"Length = 10_000 - Array.at","opsSec":19351232.21998157,"samples":9675617},{"name":"Length = 1_000_000 - Array.at","opsSec":18234563.70918462,"samples":9117282},{"name":"Length = 100 - Array[length - 1]","opsSec":18814818.15559824,"samples":9407410},{"name":"Length = 10_000 - Array[length - 1]","opsSec":19006003.772004765,"samples":9503002},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":19206307.154808447,"samples":9603154}]}-->
