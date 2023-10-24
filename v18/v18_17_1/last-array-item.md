## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,021,028|87|
|Length = 10_000 - Array.at|13,402,118|94|
|Length = 1_000_000 - Array.at|13,568,387|93|
|Length = 100 - Array[length - 1]|601,287,145|95|
|Length = 10_000 - Array[length - 1]|596,452,224|94|
|Length = 1_000_000 - Array[length - 1]|597,241,452|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:32:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":13021028.217273327,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":13402117.765089028,"samples":8},{"name":"Length = 1_000_000 - Array.at","opsSec":13568387.358592471,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":601287144.799657,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":596452224.0640281,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":597241451.880043,"samples":6}]}-->
