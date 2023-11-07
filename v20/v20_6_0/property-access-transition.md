## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,901,300|98|
|Adding property in the object creation - small object|8,031,293|96|
|Adding property after the function creation - small class|262,768|90|
|Adding property in the function creation - small class|263,311|91|
|Adding property after the class creation - small class|221,664|87|
|Adding property in the class creation - small class|221,446|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:42:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7901299.991983879,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":8031293.391543336,"samples":4},{"name":"Adding property after the function creation - small class","opsSec":262768.2345296705,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":263310.6116307533,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":221664.3804949785,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":221446.26309426143,"samples":5}]}-->
