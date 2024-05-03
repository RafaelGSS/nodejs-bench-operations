## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,734,874|94|
|Adding property in the object creation - small object|5,738,829|97|
|Adding property after the function creation - small class|297,086|89|
|Adding property in the function creation - small class|301,261|92|
|Adding property after the class creation - small class|299,706|89|
|Adding property in the class creation - small class|298,145|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:36:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5734873.865728777,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":5738828.588568682,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":297085.7415783444,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":301261.2544932141,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":299705.9021107599,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":298145.3256726959,"samples":4}]}-->
