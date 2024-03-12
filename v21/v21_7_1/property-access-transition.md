## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,129,757|96|
|Adding property in the object creation - small object|5,176,796|95|
|Adding property after the function creation - small class|269,753|90|
|Adding property in the function creation - small class|273,109|90|
|Adding property after the class creation - small class|271,647|88|
|Adding property in the class creation - small class|270,206|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:02:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5129756.803315355,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":5176796.243752139,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":269752.9628375944,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":273109.3017115343,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":271646.8511163395,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":270206.41283968056,"samples":3}]}-->
