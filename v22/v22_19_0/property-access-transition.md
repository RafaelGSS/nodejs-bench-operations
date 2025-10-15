## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,130,852|4065427|
|Adding property in the object creation - small object|8,033,445|4016958|
|Adding property after the function creation - small class|270,022|135013|
|Adding property in the function creation - small class|278,966|139884|
|Adding property after the class creation - small class|274,089|138054|
|Adding property in the class creation - small class|276,387|138196|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:11:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":4065427,"opsSec":8130852.991774228},{"name":"Adding property in the object creation - small object","samples":4016958,"opsSec":8033445.754219331},{"name":"Adding property after the function creation - small class","samples":135013,"opsSec":270022.6916819815},{"name":"Adding property in the function creation - small class","samples":139884,"opsSec":278966.8930050924},{"name":"Adding property after the class creation - small class","samples":138054,"opsSec":274089.3037724285},{"name":"Adding property in the class creation - small class","samples":138196,"opsSec":276387.81935784436}]}-->
