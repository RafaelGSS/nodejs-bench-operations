## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,609,346|3804674|
|Adding property in the object creation - small object|7,539,906|3776265|
|Adding property after the function creation - small class|239,523|119764|
|Adding property in the function creation - small class|244,614|123637|
|Adding property after the class creation - small class|209,477|104740|
|Adding property in the class creation - small class|210,474|107142|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:22:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3804674,"opsSec":7609346.173756918},{"name":"Adding property in the object creation - small object","samples":3776265,"opsSec":7539906.628004142},{"name":"Adding property after the function creation - small class","samples":119764,"opsSec":239523.47013213285},{"name":"Adding property in the function creation - small class","samples":123637,"opsSec":244614.60868191632},{"name":"Adding property after the class creation - small class","samples":104740,"opsSec":209477.21060146362},{"name":"Adding property in the class creation - small class","samples":107142,"opsSec":210474.25063082116}]}-->
