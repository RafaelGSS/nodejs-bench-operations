## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,796,298|2398150|
|Adding property in the object creation - small object|4,787,081|2393541|
|Adding property after the function creation - small class|263,141|131571|
|Adding property in the function creation - small class|277,372|139443|
|Adding property after the class creation - small class|266,897|133449|
|Adding property in the class creation - small class|271,490|135746|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:54:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4796298.618664972,"samples":2398150},{"name":"Adding property in the object creation - small object","opsSec":4787081.348981359,"samples":2393541},{"name":"Adding property after the function creation - small class","opsSec":263141.9331621887,"samples":131571},{"name":"Adding property in the function creation - small class","opsSec":277372.7734183189,"samples":139443},{"name":"Adding property after the class creation - small class","opsSec":266897.8900383389,"samples":133449},{"name":"Adding property in the class creation - small class","opsSec":271490.469336994,"samples":135746}]}-->
