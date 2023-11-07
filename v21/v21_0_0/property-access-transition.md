## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,601,697|94|
|Adding property in the object creation - small object|8,641,298|95|
|Adding property after the function creation - small class|259,124|88|
|Adding property in the function creation - small class|262,616|90|
|Adding property after the class creation - small class|258,579|88|
|Adding property in the class creation - small class|259,118|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:44:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":8601696.55141781,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":8641298.127252892,"samples":4},{"name":"Adding property after the function creation - small class","opsSec":259123.6136855893,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":262615.75356214016,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":258578.5223813281,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":259117.78986061199,"samples":4}]}-->
