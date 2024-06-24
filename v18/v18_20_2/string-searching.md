## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|17,308,129|8654065|
|Using indexof|17,296,650|8648326|
|Using RegExp.test|8,546,534|4273268|
|Using RegExp.text with cached regex pattern|8,744,144|4372073|
|Using new RegExp.test|2,954,612|1477307|
|Using new RegExp.test with cached regex pattern|3,118,531|1559266|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:40:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":17308129.336072028,"samples":8654065},{"name":"Using indexof","opsSec":17296650.924836826,"samples":8648326},{"name":"Using RegExp.test","opsSec":8546534.728186354,"samples":4273268},{"name":"Using RegExp.text with cached regex pattern","opsSec":8744144.689235605,"samples":4372073},{"name":"Using new RegExp.test","opsSec":2954612.2301194523,"samples":1477307},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3118531.9970724056,"samples":1559266}]}-->
