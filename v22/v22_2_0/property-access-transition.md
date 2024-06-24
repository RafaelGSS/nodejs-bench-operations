## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,825,528|1912765|
|Adding property in the object creation - small object|3,960,658|1980330|
|Adding property after the function creation - small class|287,660|143831|
|Adding property in the function creation - small class|293,242|146622|
|Adding property after the class creation - small class|314,304|157153|
|Adding property in the class creation - small class|326,374|163188|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:28:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3825528.4850915875,"samples":1912765},{"name":"Adding property in the object creation - small object","opsSec":3960658.566239327,"samples":1980330},{"name":"Adding property after the function creation - small class","opsSec":287660.65432347654,"samples":143831},{"name":"Adding property in the function creation - small class","opsSec":293242.53085484495,"samples":146622},{"name":"Adding property after the class creation - small class","opsSec":314304.58500063606,"samples":157153},{"name":"Adding property in the class creation - small class","opsSec":326374.8198286521,"samples":163188}]}-->
