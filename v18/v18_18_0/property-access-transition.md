## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,964,839|98|
|Adding property in the object creation - small object|1,964,816|95|
|Adding property after the function creation - small class|148,328|84|
|Adding property in the function creation - small class|146,573|86|
|Adding property after the class creation - small class|121,812|82|
|Adding property in the class creation - small class|121,026|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1964838.8537229435,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":1964816.2692240006,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":148328.18906499443,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":146572.6952300472,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":121812.13925804,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":121025.82897449717,"samples":3}]}-->
