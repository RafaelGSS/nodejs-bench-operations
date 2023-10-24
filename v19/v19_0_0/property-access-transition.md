## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,823,822|94|
|Adding property in the object creation - small object|1,864,131|96|
|Adding property after the function creation - small class|164,724|90|
|Adding property in the function creation - small class|164,487|89|
|Adding property after the class creation - small class|139,547|85|
|Adding property in the class creation - small class|140,104|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:14:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1823822.1326767246,"samples":7},{"name":"Adding property in the object creation - small object","opsSec":1864131.1106701668,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":164723.7631407071,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":164486.97122145022,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":139547.1666012335,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":140104.10458582785,"samples":4}]}-->
