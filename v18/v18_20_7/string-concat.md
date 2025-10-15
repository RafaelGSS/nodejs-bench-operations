## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|106,295,859|53147940|
|Using backtick (`)|106,150,397|53075205|
|Using array.join|11,288,398|5644429|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:54:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":53147940,"opsSec":106295859.37860328},{"name":"Using backtick (`)","samples":53075205,"opsSec":106150397.04965155},{"name":"Using array.join","samples":5644429,"opsSec":11288398.562178519}]}-->
