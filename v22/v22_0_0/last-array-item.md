## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|122,021,465|61010759|
|Length = 10_000 - Array.at|98,502,209|49275785|
|Length = 1_000_000 - Array.at|96,459,086|48229565|
|Length = 100 - Array[length - 1]|95,823,934|47926446|
|Length = 10_000 - Array[length - 1]|95,781,987|47892417|
|Length = 1_000_000 - Array[length - 1]|92,644,415|46327381|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:21:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":122021465.53076981,"samples":61010759},{"name":"Length = 10_000 - Array.at","opsSec":98502209.16395701,"samples":49275785},{"name":"Length = 1_000_000 - Array.at","opsSec":96459086.78632912,"samples":48229565},{"name":"Length = 100 - Array[length - 1]","opsSec":95823934.58191295,"samples":47926446},{"name":"Length = 10_000 - Array[length - 1]","opsSec":95781987.35933569,"samples":47892417},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":92644415.65694827,"samples":46327381}]}-->
