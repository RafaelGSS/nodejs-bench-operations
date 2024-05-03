## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,644,117|98|
|Adding property in the object creation - small object|5,661,336|95|
|Adding property after the function creation - small class|291,234|86|
|Adding property in the function creation - small class|292,669|90|
|Adding property after the class creation - small class|245,246|85|
|Adding property in the class creation - small class|245,274|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:32:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5644116.527483965,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5661335.6521332525,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":291233.73715388327,"samples":5},{"name":"Adding property in the function creation - small class","opsSec":292669.3899071785,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":245246.47760236223,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":245274.3942764345,"samples":3}]}-->
