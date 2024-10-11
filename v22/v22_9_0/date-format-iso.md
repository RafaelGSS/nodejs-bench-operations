## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,365,082|682627|
|fromUnixToISOString(new Date())|2,012,609|1011470|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:13:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1365082.1197801344,"samples":682627},{"name":"fromUnixToISOString(new Date())","opsSec":2012609.913324856,"samples":1011470}]}-->
