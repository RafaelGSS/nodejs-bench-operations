## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|133,144,581|66572319|
|Using parseInt(x, 10) - big number (10 len)|16,480,035|8240166|
|Using + - small number (2 len)|107,000,616|53528019|
|Using + - big number (10 len)|105,759,706|52897339|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:28:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":133144581.28040838,"samples":66572319},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":16480035.491201442,"samples":8240166},{"name":"Using + - small number (2 len)","opsSec":107000616.81651865,"samples":53528019},{"name":"Using + - big number (10 len)","opsSec":105759706.43787219,"samples":52897339}]}-->
