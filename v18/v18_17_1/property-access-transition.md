## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,600,913|95|
|Adding property in the object creation - small object|1,648,914|95|
|Adding property after the function creation - small class|129,648|84|
|Adding property in the function creation - small class|128,808|86|
|Adding property after the class creation - small class|105,451|82|
|Adding property in the class creation - small class|104,065|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1600912.9813040034,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":1648913.9840061658,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":129648.48326843743,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":128807.90837424061,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":105450.90077755273,"samples":5},{"name":"Adding property in the class creation - small class","opsSec":104065.35762563278,"samples":4}]}-->
