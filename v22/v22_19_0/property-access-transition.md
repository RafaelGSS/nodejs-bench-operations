## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,065,347|4032795|
|Adding property in the object creation - small object|7,825,452|3912728|
|Adding property after the function creation - small class|269,655|134846|
|Adding property in the function creation - small class|280,660|140331|
|Adding property after the class creation - small class|274,438|137840|
|Adding property in the class creation - small class|274,893|137448|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:49:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":4032795,"opsSec":8065347.007225367},{"name":"Adding property in the object creation - small object","samples":3912728,"opsSec":7825452.11857575},{"name":"Adding property after the function creation - small class","samples":134846,"opsSec":269655.13490719657},{"name":"Adding property in the function creation - small class","samples":140331,"opsSec":280660.0814076835},{"name":"Adding property after the class creation - small class","samples":137840,"opsSec":274438.34924560424},{"name":"Adding property in the class creation - small class","samples":137448,"opsSec":274893.3203399133}]}-->
