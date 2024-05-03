## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|992,436,359|93|
|Length = 10_000 - Array.at|995,376,519|98|
|Length = 1_000_000 - Array.at|994,022,578|94|
|Length = 100 - Array[length - 1]|872,819,875|98|
|Length = 10_000 - Array[length - 1]|872,657,635|99|
|Length = 1_000_000 - Array[length - 1]|871,963,207|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:39:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":992436359.2594172,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":995376518.600225,"samples":8},{"name":"Length = 1_000_000 - Array.at","opsSec":994022577.8109732,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":872819874.89493,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":872657634.7228274,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":871963207.279981,"samples":6}]}-->
