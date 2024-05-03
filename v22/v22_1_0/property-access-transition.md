## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,633,223|98|
|Adding property in the object creation - small object|5,697,852|95|
|Adding property after the function creation - small class|317,061|90|
|Adding property in the function creation - small class|317,604|92|
|Adding property after the class creation - small class|319,684|89|
|Adding property in the class creation - small class|320,730|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:37:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5633223.155076948,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5697852.096855817,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":317060.83685253485,"samples":5},{"name":"Adding property in the function creation - small class","opsSec":317603.8764004788,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":319683.802000783,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":320729.90191675816,"samples":4}]}-->
