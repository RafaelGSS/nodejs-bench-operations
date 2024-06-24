## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,927,310|1963656|
|Adding property in the object creation - small object|3,997,983|1998992|
|Adding property after the function creation - small class|290,457|145229|
|Adding property in the function creation - small class|317,438|158720|
|Adding property after the class creation - small class|311,361|155681|
|Adding property in the class creation - small class|309,799|154900|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:29:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3927310.955335246,"samples":1963656},{"name":"Adding property in the object creation - small object","opsSec":3997983.5202425676,"samples":1998992},{"name":"Adding property after the function creation - small class","opsSec":290457.5480480787,"samples":145229},{"name":"Adding property in the function creation - small class","opsSec":317438.3029748479,"samples":158720},{"name":"Adding property after the class creation - small class","opsSec":311361.0005312849,"samples":155681},{"name":"Adding property in the class creation - small class","opsSec":309799.79739103635,"samples":154900}]}-->
