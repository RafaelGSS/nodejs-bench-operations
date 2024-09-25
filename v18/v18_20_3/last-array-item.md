## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|8,122,310|4061156|
|Length = 10_000 - Array.at|7,923,284|3961643|
|Length = 1_000_000 - Array.at|7,941,159|3970580|
|Length = 100 - Array[length - 1]|14,172,880|7086441|
|Length = 10_000 - Array[length - 1]|13,943,031|6971516|
|Length = 1_000_000 - Array[length - 1]|14,074,175|7037088|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:38:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":8122310.486057878,"samples":4061156},{"name":"Length = 10_000 - Array.at","opsSec":7923284.5320984395,"samples":3961643},{"name":"Length = 1_000_000 - Array.at","opsSec":7941159.902449642,"samples":3970580},{"name":"Length = 100 - Array[length - 1]","opsSec":14172880.914339157,"samples":7086441},{"name":"Length = 10_000 - Array[length - 1]","opsSec":13943031.660092596,"samples":6971516},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":14074175.56404131,"samples":7037088}]}-->
