## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|94,175,031|47087531|
|Using backtick (`)|95,263,333|47635203|
|Using array.join|10,120,456|5063129|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:33:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":47087531,"opsSec":94175031.11058979},{"name":"Using backtick (`)","samples":47635203,"opsSec":95263333.84062234},{"name":"Using array.join","samples":5063129,"opsSec":10120456.28650646}]}-->
