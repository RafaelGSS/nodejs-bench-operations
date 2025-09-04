## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,833,315|3928768|
|Adding property in the object creation - small object|7,908,729|3955998|
|Adding property after the function creation - small class|276,748|140764|
|Adding property in the function creation - small class|292,392|146655|
|Adding property after the class creation - small class|279,092|139560|
|Adding property in the class creation - small class|269,617|142868|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:49:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3928768,"opsSec":7833315.654329546},{"name":"Adding property in the object creation - small object","samples":3955998,"opsSec":7908729.821123553},{"name":"Adding property after the function creation - small class","samples":140764,"opsSec":276748.39634160104},{"name":"Adding property in the function creation - small class","samples":146655,"opsSec":292392.99999733834},{"name":"Adding property after the class creation - small class","samples":139560,"opsSec":279092.44855166384},{"name":"Adding property in the class creation - small class","samples":142868,"opsSec":269617.6593882713}]}-->
