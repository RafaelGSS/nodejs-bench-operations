## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,772,809|1886405|
|Adding property in the object creation - small object|4,034,564|2017283|
|Adding property after the function creation - small class|272,088|136045|
|Adding property in the function creation - small class|267,363|133682|
|Adding property after the class creation - small class|266,898|133450|
|Adding property in the class creation - small class|267,015|133508|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:27:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3772809.426533974,"samples":1886405},{"name":"Adding property in the object creation - small object","opsSec":4034564.6040402735,"samples":2017283},{"name":"Adding property after the function creation - small class","opsSec":272088.56282819604,"samples":136045},{"name":"Adding property in the function creation - small class","opsSec":267363.3711612437,"samples":133682},{"name":"Adding property after the class creation - small class","opsSec":266898.7920161089,"samples":133450},{"name":"Adding property in the class creation - small class","opsSec":267015.0456882485,"samples":133508}]}-->
