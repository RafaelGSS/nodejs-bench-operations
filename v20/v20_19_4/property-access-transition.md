## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,649,805|3825013|
|Adding property in the object creation - small object|7,546,654|3773349|
|Adding property after the function creation - small class|234,633|117322|
|Adding property in the function creation - small class|245,958|123331|
|Adding property after the class creation - small class|238,247|119682|
|Adding property in the class creation - small class|232,766|118146|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:10:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3825013,"opsSec":7649805.609100401},{"name":"Adding property in the object creation - small object","samples":3773349,"opsSec":7546654.274685132},{"name":"Adding property after the function creation - small class","samples":117322,"opsSec":234633.09613075663},{"name":"Adding property in the function creation - small class","samples":123331,"opsSec":245958.89697792096},{"name":"Adding property after the class creation - small class","samples":119682,"opsSec":238247.55433009015},{"name":"Adding property in the class creation - small class","samples":118146,"opsSec":232766.88426684172}]}-->
