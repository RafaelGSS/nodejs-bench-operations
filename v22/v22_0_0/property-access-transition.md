## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,866,742|2433372|
|Adding property in the object creation - small object|4,775,119|2387560|
|Adding property after the function creation - small class|259,874|129938|
|Adding property in the function creation - small class|250,322|125162|
|Adding property after the class creation - small class|261,818|131936|
|Adding property in the class creation - small class|272,344|136221|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:53:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4866742.968241147,"samples":2433372},{"name":"Adding property in the object creation - small object","opsSec":4775119.331480496,"samples":2387560},{"name":"Adding property after the function creation - small class","opsSec":259874.18503863033,"samples":129938},{"name":"Adding property in the function creation - small class","opsSec":250322.601697999,"samples":125162},{"name":"Adding property after the class creation - small class","opsSec":261818.48691594924,"samples":131936},{"name":"Adding property in the class creation - small class","opsSec":272344.90958425234,"samples":136221}]}-->
