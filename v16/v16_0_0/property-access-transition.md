## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,735,647|97|
|Adding property in the object creation - small object|1,740,432|97|
|Adding property after the function creation - small class|153,113|86|
|Adding property in the function creation - small class|153,862|87|
|Adding property after the class creation - small class|130,334|85|
|Adding property in the class creation - small class|130,219|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1735646.5997568844,"samples":7},{"name":"Adding property in the object creation - small object","opsSec":1740432.3713283255,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":153112.6085991084,"samples":5},{"name":"Adding property in the function creation - small class","opsSec":153862.1011504004,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":130333.61874019098,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":130218.65911394333,"samples":3}]}-->
