## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|102,367,091|51228424|
|Using backtick (`)|100,723,564|50367104|
|Using array.join|10,980,112|5490662|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:04:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using + sign","samples":51228424,"opsSec":102367091.30593786},{"name":"Using backtick (`)","samples":50367104,"opsSec":100723564.7423608},{"name":"Using array.join","samples":5490662,"opsSec":10980112.717885414}]}-->
