## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,722,441|9861221|
|Length = 10_000 - Array.at|19,648,343|9824172|
|Length = 1_000_000 - Array.at|19,699,036|9849519|
|Length = 100 - Array[length - 1]|19,957,274|9978638|
|Length = 10_000 - Array[length - 1]|19,870,296|9935149|
|Length = 1_000_000 - Array[length - 1]|19,901,578|9950791|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:51:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":19722441.289998796,"samples":9861221},{"name":"Length = 10_000 - Array.at","opsSec":19648343.764186233,"samples":9824172},{"name":"Length = 1_000_000 - Array.at","opsSec":19699036.266515613,"samples":9849519},{"name":"Length = 100 - Array[length - 1]","opsSec":19957274.28366628,"samples":9978638},{"name":"Length = 10_000 - Array[length - 1]","opsSec":19870296.648782216,"samples":9935149},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":19901578.895214066,"samples":9950791}]}-->
