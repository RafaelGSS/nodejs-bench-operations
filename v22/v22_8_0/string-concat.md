## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|138,728,190|69761724|
|Using backtick (`)|98,047,020|49072593|
|Using array.join|9,834,946|4917476|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:58:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using + sign","opsSec":138728190.0378897,"samples":69761724},{"name":"Using backtick (`)","opsSec":98047020.73455843,"samples":49072593},{"name":"Using array.join","opsSec":9834946.000682939,"samples":4917476}]}-->
