## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|88,223,738|44112789|
|Using parseInt(x, 10) - big number (10 len)|96,926,716|48467001|
|Using + - small number (2 len)|94,810,706|47405372|
|Using + - big number (10 len)|92,989,718|46803380|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:09:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":44112789,"opsSec":88223738.18216395},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":48467001,"opsSec":96926716.98795119},{"name":"Using + - small number (2 len)","samples":47405372,"opsSec":94810706.83420292},{"name":"Using + - big number (10 len)","samples":46803380,"opsSec":92989718.53953569}]}-->
