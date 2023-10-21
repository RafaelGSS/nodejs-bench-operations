## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|593,534,828|96|
|Using backtick (`)|593,283,217|99|
|Using array.join|8,653,160|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:57:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":593534827.7442781,"samples":7},{"name":"Using backtick (`)","opsSec":593283216.56479,"samples":7},{"name":"Using array.join","opsSec":8653160.384634828,"samples":5}]}-->
