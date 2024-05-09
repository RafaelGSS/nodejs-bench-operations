## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,669,322|9834662|
|Length = 10_000 - Array.at|19,712,321|9856161|
|Length = 1_000_000 - Array.at|19,805,707|9902854|
|Length = 100 - Array[length - 1]|19,834,283|9917142|
|Length = 10_000 - Array[length - 1]|19,887,730|9943866|
|Length = 1_000_000 - Array[length - 1]|19,919,314|9959658|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:56:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":19669322.93786005,"samples":9834662},{"name":"Length = 10_000 - Array.at","opsSec":19712321.48755717,"samples":9856161},{"name":"Length = 1_000_000 - Array.at","opsSec":19805707.485099923,"samples":9902854},{"name":"Length = 100 - Array[length - 1]","opsSec":19834283.920660455,"samples":9917142},{"name":"Length = 10_000 - Array[length - 1]","opsSec":19887730.568161923,"samples":9943866},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":19919314.9642731,"samples":9959658}]}-->
