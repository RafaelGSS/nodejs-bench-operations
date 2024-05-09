## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,642,293|7821147|
|Length = 10_000 - Array.at|16,008,337|8004169|
|Length = 1_000_000 - Array.at|16,008,859|8004430|
|Length = 100 - Array[length - 1]|16,023,471|8011736|
|Length = 10_000 - Array[length - 1]|16,028,467|8014234|
|Length = 1_000_000 - Array[length - 1]|15,979,573|7989787|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:55:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15642293.485340953,"samples":7821147},{"name":"Length = 10_000 - Array.at","opsSec":16008337.213762889,"samples":8004169},{"name":"Length = 1_000_000 - Array.at","opsSec":16008859.442745809,"samples":8004430},{"name":"Length = 100 - Array[length - 1]","opsSec":16023471.877750613,"samples":8011736},{"name":"Length = 10_000 - Array[length - 1]","opsSec":16028467.228060152,"samples":8014234},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15979573.169457685,"samples":7989787}]}-->
