## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,938,692|3969353|
|Adding property in the object creation - small object|8,002,525|4001265|
|Adding property after the function creation - small class|272,080|136049|
|Adding property in the function creation - small class|286,231|143116|
|Adding property after the class creation - small class|273,038|136896|
|Adding property in the class creation - small class|276,752|138433|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:45:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3969353,"opsSec":7938692.74238312},{"name":"Adding property in the object creation - small object","samples":4001265,"opsSec":8002525.438560499},{"name":"Adding property after the function creation - small class","samples":136049,"opsSec":272080.9720844431},{"name":"Adding property in the function creation - small class","samples":143116,"opsSec":286231.03311157017},{"name":"Adding property after the class creation - small class","samples":136896,"opsSec":273038.929689789},{"name":"Adding property in the class creation - small class","samples":138433,"opsSec":276752.65041696874}]}-->
