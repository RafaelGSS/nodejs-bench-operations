## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,943,457|3971731|
|Adding property in the object creation - small object|7,917,423|3958715|
|Adding property after the function creation - small class|276,786|138394|
|Adding property in the function creation - small class|290,843|145423|
|Adding property after the class creation - small class|271,020|137167|
|Adding property in the class creation - small class|273,693|137513|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:23:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3971731,"opsSec":7943457.805854279},{"name":"Adding property in the object creation - small object","samples":3958715,"opsSec":7917423.206850889},{"name":"Adding property after the function creation - small class","samples":138394,"opsSec":276786.9587274613},{"name":"Adding property in the function creation - small class","samples":145423,"opsSec":290843.9768892968},{"name":"Adding property after the class creation - small class","samples":137167,"opsSec":271020.8953085484},{"name":"Adding property in the class creation - small class","samples":137513,"opsSec":273693.81724008924}]}-->
