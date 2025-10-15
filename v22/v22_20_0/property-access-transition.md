## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,059,698|4053974|
|Adding property in the object creation - small object|8,213,159|4108926|
|Adding property after the function creation - small class|269,563|134802|
|Adding property in the function creation - small class|281,158|140580|
|Adding property after the class creation - small class|272,781|137420|
|Adding property in the class creation - small class|274,067|137038|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:12:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":4053974,"opsSec":8059698.934715285},{"name":"Adding property in the object creation - small object","samples":4108926,"opsSec":8213159.854627691},{"name":"Adding property after the function creation - small class","samples":134802,"opsSec":269563.93740762246},{"name":"Adding property in the function creation - small class","samples":140580,"opsSec":281158.9985116473},{"name":"Adding property after the class creation - small class","samples":137420,"opsSec":272781.6144874232},{"name":"Adding property in the class creation - small class","samples":137038,"opsSec":274067.5258321013}]}-->
