## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,548,834|95|
|Adding property in the object creation - small object|3,529,734|95|
|Adding property after the function creation - small class|231,633|89|
|Adding property in the function creation - small class|235,363|92|
|Adding property after the class creation - small class|200,670|85|
|Adding property in the class creation - small class|201,743|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:05:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3548833.511445395,"samples":4},{"name":"Adding property in the object creation - small object","opsSec":3529734.29513765,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":231633.4002453293,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":235362.5662761998,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":200670.39146698563,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":201743.3683801467,"samples":3}]}-->
