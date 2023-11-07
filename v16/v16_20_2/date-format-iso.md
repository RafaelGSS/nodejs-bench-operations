## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,615,966|99|
|fromUnixToISOString(new Date())|2,050,857|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:59:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2615965.683398453,"samples":7},{"name":"fromUnixToISOString(new Date())","opsSec":2050857.4627796449,"samples":6}]}-->
