## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,611,790|95|
|Adding property in the object creation - small object|5,665,835|93|
|Adding property after the function creation - small class|316,553|88|
|Adding property in the function creation - small class|317,592|92|
|Adding property after the class creation - small class|315,327|89|
|Adding property in the class creation - small class|315,196|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:35:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5611789.554478752,"samples":4},{"name":"Adding property in the object creation - small object","opsSec":5665834.88413781,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":316552.7759700714,"samples":6},{"name":"Adding property in the function creation - small class","opsSec":317591.9942491332,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":315327.4119623742,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":315196.1060922906,"samples":5}]}-->
