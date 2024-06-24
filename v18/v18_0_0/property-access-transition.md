## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,107,939|1553970|
|Adding property in the object creation - small object|3,106,887|1553444|
|Adding property after the function creation - small class|247,460|123731|
|Adding property in the function creation - small class|245,670|122836|
|Adding property after the class creation - small class|214,623|107312|
|Adding property in the class creation - small class|213,134|106568|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:25:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3107939.9076135214,"samples":1553970},{"name":"Adding property in the object creation - small object","opsSec":3106887.1286471584,"samples":1553444},{"name":"Adding property after the function creation - small class","opsSec":247460.51426825474,"samples":123731},{"name":"Adding property in the function creation - small class","opsSec":245670.51822632866,"samples":122836},{"name":"Adding property after the class creation - small class","opsSec":214623.04873383397,"samples":107312},{"name":"Adding property in the class creation - small class","opsSec":213134.23144820545,"samples":106568}]}-->
