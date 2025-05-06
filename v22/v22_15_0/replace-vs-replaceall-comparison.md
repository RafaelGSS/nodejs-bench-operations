## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,326,611|1663653|
|Using replaceAll()|3,169,245|1584623|
|Using replaceAll(//g)|3,095,482|1547742|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:35:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using replace(//g)","samples":1663653,"opsSec":3326611.0709472788},{"name":"Using replaceAll()","samples":1584623,"opsSec":3169245.0809189263},{"name":"Using replaceAll(//g)","samples":1547742,"opsSec":3095482.66275149}]}-->
