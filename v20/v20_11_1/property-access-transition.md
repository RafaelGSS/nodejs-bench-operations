## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,200,886|96|
|Adding property in the object creation - small object|5,212,616|96|
|Adding property after the function creation - small class|261,592|88|
|Adding property in the function creation - small class|263,650|90|
|Adding property after the class creation - small class|270,967|88|
|Adding property in the class creation - small class|269,411|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:02:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5200885.8435557475,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":5212616.349527022,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":261592.42530582345,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":263649.74209575774,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":270967.36829033133,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":269410.8468875907,"samples":4}]}-->
