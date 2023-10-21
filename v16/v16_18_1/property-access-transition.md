## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,653,947|97|
|Adding property in the object creation - small object|2,652,931|96|
|Adding property after the function creation - small class|166,171|87|
|Adding property in the function creation - small class|167,868|88|
|Adding property after the class creation - small class|142,764|88|
|Adding property in the class creation - small class|143,168|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2653947.2588876,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":2652931.0287059075,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":166170.50996983232,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":167868.25012182814,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":142764.01769196172,"samples":5},{"name":"Adding property in the class creation - small class","opsSec":143167.96514851876,"samples":4}]}-->
