## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,550,324|3775529|
|Adding property in the object creation - small object|7,596,700|3799129|
|Adding property after the function creation - small class|240,195|120098|
|Adding property in the function creation - small class|248,951|124942|
|Adding property after the class creation - small class|235,592|119657|
|Adding property in the class creation - small class|231,936|115973|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:19:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3775529,"opsSec":7550324.712463926},{"name":"Adding property in the object creation - small object","samples":3799129,"opsSec":7596700.752312783},{"name":"Adding property after the function creation - small class","samples":120098,"opsSec":240195.8020786591},{"name":"Adding property in the function creation - small class","samples":124942,"opsSec":248951.63628983276},{"name":"Adding property after the class creation - small class","samples":119657,"opsSec":235592.73036640696},{"name":"Adding property in the class creation - small class","samples":115973,"opsSec":231936.40618249465}]}-->
