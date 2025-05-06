## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,337,313|1668657|
|Using replaceAll()|2,990,885|1495499|
|Using replaceAll(//g)|3,020,554|1510831|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:35:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using replace(//g)","samples":1668657,"opsSec":3337313.0855762144},{"name":"Using replaceAll()","samples":1495499,"opsSec":2990885.775983914},{"name":"Using replaceAll(//g)","samples":1510831,"opsSec":3020554.278170675}]}-->
