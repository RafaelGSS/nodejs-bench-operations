## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,108,408|7054205|
|Length = 10_000 - Array.at|14,148,620|7074311|
|Length = 1_000_000 - Array.at|14,020,232|7010117|
|Length = 100 - Array[length - 1]|13,271,873|6635937|
|Length = 10_000 - Array[length - 1]|14,114,473|7057237|
|Length = 1_000_000 - Array[length - 1]|13,990,325|6995163|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:07:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":14108408.87127661,"samples":7054205},{"name":"Length = 10_000 - Array.at","opsSec":14148620.698257586,"samples":7074311},{"name":"Length = 1_000_000 - Array.at","opsSec":14020232.149447063,"samples":7010117},{"name":"Length = 100 - Array[length - 1]","opsSec":13271873.973448519,"samples":6635937},{"name":"Length = 10_000 - Array[length - 1]","opsSec":14114473.745868115,"samples":7057237},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":13990325.412397379,"samples":6995163}]}-->
