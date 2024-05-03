## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,202,814|93|
|Using brackets {}|1,219,408|96|
|Using '' + |1,205,129|96|
|Using date.toString()|1,337,100|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:45:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1202814.0951873478,"samples":5},{"name":"Using brackets {}","opsSec":1219407.892338685,"samples":4},{"name":"Using '' + ","opsSec":1205128.769785198,"samples":4},{"name":"Using date.toString()","opsSec":1337100.4923520565,"samples":4}]}-->
