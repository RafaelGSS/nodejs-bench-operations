## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,730,311|1868384|
|Adding property in the object creation - small object|3,732,324|1866163|
|Adding property after the function creation - small class|184,206|92781|
|Adding property in the function creation - small class|189,187|94594|
|Adding property after the class creation - small class|157,977|79289|
|Adding property in the class creation - small class|156,053|78072|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:47:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":1868384,"opsSec":3730311.0553817973},{"name":"Adding property in the object creation - small object","samples":1866163,"opsSec":3732324.1263732887},{"name":"Adding property after the function creation - small class","samples":92781,"opsSec":184206.81075601716},{"name":"Adding property in the function creation - small class","samples":94594,"opsSec":189187.0336326322},{"name":"Adding property after the class creation - small class","samples":79289,"opsSec":157977.25830008966},{"name":"Adding property in the class creation - small class","samples":78072,"opsSec":156053.8370866541}]}-->
