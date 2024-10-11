## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,104,062|3552034|
|Date.now()|13,735,354|6872011|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:45:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Date().getTime()","opsSec":7104062.061004118,"samples":3552034},{"name":"Date.now()","opsSec":13735354.496839734,"samples":6872011}]}-->
