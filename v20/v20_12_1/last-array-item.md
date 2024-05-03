## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|987,607,715|96|
|Length = 10_000 - Array.at|994,788,475|96|
|Length = 1_000_000 - Array.at|994,039,742|95|
|Length = 100 - Array[length - 1]|872,501,462|98|
|Length = 10_000 - Array[length - 1]|872,933,312|98|
|Length = 1_000_000 - Array[length - 1]|872,600,946|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:38:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":987607715.3447243,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":994788475.4553167,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":994039741.59442,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":872501461.9347192,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":872933312.493838,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":872600945.6248375,"samples":6}]}-->
