## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,013,953|2506977|
|Adding property in the object creation - small object|4,998,735|2499368|
|Adding property after the function creation - small class|243,377|121689|
|Adding property in the function creation - small class|241,107|120554|
|Adding property after the class creation - small class|227,465|113734|
|Adding property in the class creation - small class|236,385|118217|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:51:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5013953.157664833,"samples":2506977},{"name":"Adding property in the object creation - small object","opsSec":4998735.800066703,"samples":2499368},{"name":"Adding property after the function creation - small class","opsSec":243377.72741704513,"samples":121689},{"name":"Adding property in the function creation - small class","opsSec":241107.38324733556,"samples":120554},{"name":"Adding property after the class creation - small class","opsSec":227465.8377098356,"samples":113734},{"name":"Adding property in the class creation - small class","opsSec":236385.4048340708,"samples":118217}]}-->
