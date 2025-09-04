## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,165,791|4082969|
|Adding property in the object creation - small object|8,157,633|4078820|
|Adding property after the function creation - small class|269,513|134767|
|Adding property in the function creation - small class|280,325|141007|
|Adding property after the class creation - small class|266,710|135754|
|Adding property in the class creation - small class|270,311|138375|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:46:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":4082969,"opsSec":8165791.848657493},{"name":"Adding property in the object creation - small object","samples":4078820,"opsSec":8157633.865459333},{"name":"Adding property after the function creation - small class","samples":134767,"opsSec":269513.0626082182},{"name":"Adding property in the function creation - small class","samples":141007,"opsSec":280325.72653824295},{"name":"Adding property after the class creation - small class","samples":135754,"opsSec":266710.77621851716},{"name":"Adding property in the class creation - small class","samples":138375,"opsSec":270311.4779381393}]}-->
