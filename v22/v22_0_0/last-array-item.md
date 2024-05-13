## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,782,314|7891158|
|Length = 10_000 - Array.at|15,849,586|7924794|
|Length = 1_000_000 - Array.at|15,849,334|7924668|
|Length = 100 - Array[length - 1]|15,821,416|7910709|
|Length = 10_000 - Array[length - 1]|15,905,223|7952612|
|Length = 1_000_000 - Array[length - 1]|15,897,925|7948963|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:01:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15782314.169264073,"samples":7891158},{"name":"Length = 10_000 - Array.at","opsSec":15849586.605200244,"samples":7924794},{"name":"Length = 1_000_000 - Array.at","opsSec":15849334.383385163,"samples":7924668},{"name":"Length = 100 - Array[length - 1]","opsSec":15821416.987369973,"samples":7910709},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15905223.777300058,"samples":7952612},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15897925.42756969,"samples":7948963}]}-->
