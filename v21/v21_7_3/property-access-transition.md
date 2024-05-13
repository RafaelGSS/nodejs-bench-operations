## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,753,155|1876578|
|Adding property in the object creation - small object|3,794,957|1897479|
|Adding property after the function creation - small class|265,971|132986|
|Adding property in the function creation - small class|281,229|140615|
|Adding property after the class creation - small class|273,704|136853|
|Adding property in the class creation - small class|263,202|131602|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:15:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3753155.887404202,"samples":1876578},{"name":"Adding property in the object creation - small object","opsSec":3794957.4611151055,"samples":1897479},{"name":"Adding property after the function creation - small class","opsSec":265971.16219083196,"samples":132986},{"name":"Adding property in the function creation - small class","opsSec":281229.7947022648,"samples":140615},{"name":"Adding property after the class creation - small class","opsSec":273704.24719799403,"samples":136853},{"name":"Adding property in the class creation - small class","opsSec":263202.8208513684,"samples":131602}]}-->
