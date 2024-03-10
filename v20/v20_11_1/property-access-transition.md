## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,220,716|96|
|Adding property in the object creation - small object|5,211,134|97|
|Adding property after the function creation - small class|261,229|89|
|Adding property in the function creation - small class|261,186|90|
|Adding property after the class creation - small class|271,544|88|
|Adding property in the class creation - small class|271,263|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:05:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5220715.79815138,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5211134.325157752,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":261229.156712844,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":261186.02346301364,"samples":5},{"name":"Adding property after the class creation - small class","opsSec":271544.26519179443,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":271263.29616905365,"samples":4}]}-->
