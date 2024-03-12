## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,169,414|93|
|Adding property in the object creation - small object|5,211,137|96|
|Adding property after the function creation - small class|261,935|88|
|Adding property in the function creation - small class|266,664|91|
|Adding property after the class creation - small class|266,137|87|
|Adding property in the class creation - small class|265,295|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:02:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5169414.180866168,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5211136.628673651,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":261934.8825642275,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":266664.04533455404,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":266136.7574367197,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":265294.56875323656,"samples":3}]}-->
