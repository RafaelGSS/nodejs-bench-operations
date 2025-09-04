## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|95,292,071|47646046|
|Using backtick (`)|107,152,146|53577484|
|Using array.join|11,046,348|5523175|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:34:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":47646046,"opsSec":95292071.41691257},{"name":"Using backtick (`)","samples":53577484,"opsSec":107152146.25538051},{"name":"Using array.join","samples":5523175,"opsSec":11046348.055842742}]}-->
