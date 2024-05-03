## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,068,960|94|
|Adding property in the object creation - small object|4,083,621|96|
|Adding property after the function creation - small class|213,852|90|
|Adding property in the function creation - small class|214,894|90|
|Adding property after the class creation - small class|182,222|84|
|Adding property in the class creation - small class|181,847|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:30:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4068960.199677181,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":4083621.4876575307,"samples":4},{"name":"Adding property after the function creation - small class","opsSec":213852.23519455513,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":214894.20000918044,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":182221.61896060072,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":181846.97819547472,"samples":4}]}-->
