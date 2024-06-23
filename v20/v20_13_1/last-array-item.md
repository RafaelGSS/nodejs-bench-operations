## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,518,870|9759436|
|Length = 10_000 - Array.at|19,386,123|9693062|
|Length = 1_000_000 - Array.at|19,408,572|9704287|
|Length = 100 - Array[length - 1]|19,185,503|9592752|
|Length = 10_000 - Array[length - 1]|19,233,191|9616596|
|Length = 1_000_000 - Array[length - 1]|19,290,911|9645456|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:49:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":19518870.243325192,"samples":9759436},{"name":"Length = 10_000 - Array.at","opsSec":19386123.45719622,"samples":9693062},{"name":"Length = 1_000_000 - Array.at","opsSec":19408572.913115736,"samples":9704287},{"name":"Length = 100 - Array[length - 1]","opsSec":19185503.079110056,"samples":9592752},{"name":"Length = 10_000 - Array[length - 1]","opsSec":19233191.26896678,"samples":9616596},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":19290911.807156645,"samples":9645456}]}-->
