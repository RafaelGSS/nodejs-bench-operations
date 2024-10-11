## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|158,072,135|79037264|
|Using backtick (`)|104,853,183|52426598|
|Using array.join|10,573,977|5287723|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:59:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using + sign","opsSec":158072135.73629776,"samples":79037264},{"name":"Using backtick (`)","opsSec":104853183.41761799,"samples":52426598},{"name":"Using array.join","opsSec":10573977.782037009,"samples":5287723}]}-->
