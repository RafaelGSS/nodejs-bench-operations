## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,233,533|92|
|Adding property in the object creation - small object|5,399,371|90|
|Adding property after the function creation - small class|276,349|88|
|Adding property in the function creation - small class|286,554|90|
|Adding property after the class creation - small class|287,013|87|
|Adding property in the class creation - small class|290,195|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:05:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5233533.015148082,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":5399371.102111538,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":276348.9796733091,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":286554.05966905894,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":287013.1816753348,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":290195.4483681481,"samples":3}]}-->
