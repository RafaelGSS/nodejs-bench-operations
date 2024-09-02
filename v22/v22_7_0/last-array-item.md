## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,866,294|7433148|
|Length = 10_000 - Array.at|15,371,290|7685646|
|Length = 1_000_000 - Array.at|14,662,087|7331044|
|Length = 100 - Array[length - 1]|15,138,243|7569122|
|Length = 10_000 - Array[length - 1]|14,871,831|7435916|
|Length = 1_000_000 - Array[length - 1]|15,290,039|7645020|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:09:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":14866294.36488197,"samples":7433148},{"name":"Length = 10_000 - Array.at","opsSec":15371290.278364355,"samples":7685646},{"name":"Length = 1_000_000 - Array.at","opsSec":14662087.530893583,"samples":7331044},{"name":"Length = 100 - Array[length - 1]","opsSec":15138243.001012206,"samples":7569122},{"name":"Length = 10_000 - Array[length - 1]","opsSec":14871831.018452546,"samples":7435916},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15290039.877552368,"samples":7645020}]}-->
