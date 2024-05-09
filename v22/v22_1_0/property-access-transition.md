## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,913,742|1956872|
|Adding property in the object creation - small object|3,952,234|1976118|
|Adding property after the function creation - small class|301,387|150694|
|Adding property in the function creation - small class|308,800|154401|
|Adding property after the class creation - small class|313,991|156996|
|Adding property in the class creation - small class|319,179|159590|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:44:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3913742.919807339,"samples":1956872},{"name":"Adding property in the object creation - small object","opsSec":3952234.91708838,"samples":1976118},{"name":"Adding property after the function creation - small class","opsSec":301387.63773210155,"samples":150694},{"name":"Adding property in the function creation - small class","opsSec":308800.7561505898,"samples":154401},{"name":"Adding property after the class creation - small class","opsSec":313991.6991959914,"samples":156996},{"name":"Adding property in the class creation - small class","opsSec":319179.463778522,"samples":159590}]}-->
