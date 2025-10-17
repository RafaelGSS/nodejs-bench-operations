## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|88,094,667|44047338|
|Using parseInt(x, 10) - big number (10 len)|89,160,081|44580066|
|Using + - small number (2 len)|89,022,219|44523034|
|Using + - big number (10 len)|89,888,335|44957591|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:34:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":44047338,"opsSec":88094667.19053328},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":44580066,"opsSec":89160081.3570738},{"name":"Using + - small number (2 len)","samples":44523034,"opsSec":89022219.65953095},{"name":"Using + - big number (10 len)","samples":44957591,"opsSec":89888335.9495853}]}-->
