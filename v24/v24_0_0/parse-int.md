## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|94,167,013|47162339|
|Using parseInt(x, 10) - big number (10 len)|93,384,866|46703536|
|Using + - small number (2 len)|94,615,800|47307906|
|Using + - big number (10 len)|93,094,243|46550781|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:11:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":47162339,"opsSec":94167013.79213977},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":46703536,"opsSec":93384866.57288682},{"name":"Using + - small number (2 len)","samples":47307906,"opsSec":94615800.45687233},{"name":"Using + - big number (10 len)","samples":46550781,"opsSec":93094243.11679463}]}-->
