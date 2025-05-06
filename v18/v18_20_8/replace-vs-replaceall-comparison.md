## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,355,854|1678451|
|Using replaceAll()|2,900,242|1450197|
|Using replaceAll(//g)|2,907,928|1455053|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:36:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using replace(//g)","samples":1678451,"opsSec":3355854.0070638424},{"name":"Using replaceAll()","samples":1450197,"opsSec":2900242.2883258974},{"name":"Using replaceAll(//g)","samples":1455053,"opsSec":2907928.054940548}]}-->
