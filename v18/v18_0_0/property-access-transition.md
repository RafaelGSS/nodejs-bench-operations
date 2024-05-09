## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,010,282|1505142|
|Adding property in the object creation - small object|3,041,081|1520541|
|Adding property after the function creation - small class|251,753|126182|
|Adding property in the function creation - small class|253,630|126816|
|Adding property after the class creation - small class|223,531|111769|
|Adding property in the class creation - small class|216,951|108477|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:40:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3010282.212909052,"samples":1505142},{"name":"Adding property in the object creation - small object","opsSec":3041081.7911854847,"samples":1520541},{"name":"Adding property after the function creation - small class","opsSec":251753.5549629217,"samples":126182},{"name":"Adding property in the function creation - small class","opsSec":253630.36258817714,"samples":126816},{"name":"Adding property after the class creation - small class","opsSec":223531.27365658028,"samples":111769},{"name":"Adding property in the class creation - small class","opsSec":216951.79039702838,"samples":108477}]}-->
