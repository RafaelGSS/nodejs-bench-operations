## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|95,177,174|47593591|
|Using parseInt(x, 10) - big number (10 len)|94,207,662|47164746|
|Using + - small number (2 len)|94,090,591|47053009|
|Using + - big number (10 len)|95,850,439|47925220|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:34:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":47593591,"opsSec":95177174.3104756},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":47164746,"opsSec":94207662.2743162},{"name":"Using + - small number (2 len)","samples":47053009,"opsSec":94090591.47116594},{"name":"Using + - big number (10 len)","samples":47925220,"opsSec":95850439.42489736}]}-->
