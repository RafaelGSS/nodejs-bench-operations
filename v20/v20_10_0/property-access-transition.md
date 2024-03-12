## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,140,985|96|
|Adding property in the object creation - small object|5,171,856|96|
|Adding property after the function creation - small class|253,664|89|
|Adding property in the function creation - small class|256,221|89|
|Adding property after the class creation - small class|256,910|85|
|Adding property in the class creation - small class|257,262|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:02:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5140984.790783605,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":5171855.870435822,"samples":4},{"name":"Adding property after the function creation - small class","opsSec":253663.96522042344,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":256221.46527519473,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":256910.44053762816,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":257261.68309360213,"samples":3}]}-->
