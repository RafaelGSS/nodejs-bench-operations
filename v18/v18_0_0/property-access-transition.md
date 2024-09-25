## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,943,271|1471636|
|Adding property in the object creation - small object|2,956,069|1478035|
|Adding property after the function creation - small class|236,359|119138|
|Adding property in the function creation - small class|234,041|117021|
|Adding property after the class creation - small class|189,675|94838|
|Adding property in the class creation - small class|193,077|96539|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:49:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2943271.8352138977,"samples":1471636},{"name":"Adding property in the object creation - small object","opsSec":2956069.6717257914,"samples":1478035},{"name":"Adding property after the function creation - small class","opsSec":236359.6300527769,"samples":119138},{"name":"Adding property in the function creation - small class","opsSec":234041.19316585973,"samples":117021},{"name":"Adding property after the class creation - small class","opsSec":189675.86377221165,"samples":94838},{"name":"Adding property in the class creation - small class","opsSec":193077.3995704786,"samples":96539}]}-->
