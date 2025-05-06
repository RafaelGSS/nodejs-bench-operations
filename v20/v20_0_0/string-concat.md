## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|100,838,126|50457492|
|Using backtick (`)|100,458,899|50251238|
|Using array.join|10,765,516|5384352|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:07:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using + sign","samples":50457492,"opsSec":100838126.99469094},{"name":"Using backtick (`)","samples":50251238,"opsSec":100458899.94297172},{"name":"Using array.join","samples":5384352,"opsSec":10765516.567385761}]}-->
