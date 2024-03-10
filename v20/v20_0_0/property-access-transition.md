## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,059,663|90|
|Adding property in the object creation - small object|5,186,229|93|
|Adding property after the function creation - small class|267,060|88|
|Adding property in the function creation - small class|270,513|89|
|Adding property after the class creation - small class|228,037|85|
|Adding property in the class creation - small class|226,240|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:05:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5059662.936137498,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5186229.254426773,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":267060.1212411771,"samples":5},{"name":"Adding property in the function creation - small class","opsSec":270513.37801999965,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":228037.20362982253,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":226240.2810058991,"samples":3}]}-->
