## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,453,683|92|
|Adding property in the object creation - small object|8,501,750|94|
|Adding property after the function creation - small class|253,389|89|
|Adding property in the function creation - small class|260,543|91|
|Adding property after the class creation - small class|220,891|87|
|Adding property in the class creation - small class|215,513|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:43:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":8453682.870268669,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":8501750.291335082,"samples":4},{"name":"Adding property after the function creation - small class","opsSec":253388.71591678885,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":260542.5296078394,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":220890.58018306713,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":215513.23845788502,"samples":3}]}-->
