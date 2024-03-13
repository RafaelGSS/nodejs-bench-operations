## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,016,420|96|
|Adding property in the object creation - small object|5,054,878|98|
|Adding property after the function creation - small class|258,426|89|
|Adding property in the function creation - small class|260,119|89|
|Adding property after the class creation - small class|268,331|89|
|Adding property in the class creation - small class|267,422|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 16:05:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5016419.694956264,"samples":8},{"name":"Adding property in the object creation - small object","opsSec":5054878.457449984,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":258426.31999259995,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":260118.8335859503,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":268331.46592896857,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":267421.907966488,"samples":6}]}-->
