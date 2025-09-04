## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|106,399,539|53217217|
|Using backtick (`)|105,811,265|52928588|
|Using array.join|10,155,995|5078368|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:32:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":53217217,"opsSec":106399539.84530957},{"name":"Using backtick (`)","samples":52928588,"opsSec":105811265.33845976},{"name":"Using array.join","samples":5078368,"opsSec":10155995.973197417}]}-->
