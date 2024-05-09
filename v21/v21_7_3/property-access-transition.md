## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,772,876|1886439|
|Adding property in the object creation - small object|3,744,386|1872194|
|Adding property after the function creation - small class|266,869|133435|
|Adding property in the function creation - small class|280,157|140079|
|Adding property after the class creation - small class|273,977|136993|
|Adding property in the class creation - small class|266,024|133013|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:44:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3772876.128652639,"samples":1886439},{"name":"Adding property in the object creation - small object","opsSec":3744386.5396871953,"samples":1872194},{"name":"Adding property after the function creation - small class","opsSec":266869.3573785536,"samples":133435},{"name":"Adding property in the function creation - small class","opsSec":280157.5724794746,"samples":140079},{"name":"Adding property after the class creation - small class","opsSec":273977.5028617666,"samples":136993},{"name":"Adding property in the class creation - small class","opsSec":266024.6475307611,"samples":133013}]}-->
