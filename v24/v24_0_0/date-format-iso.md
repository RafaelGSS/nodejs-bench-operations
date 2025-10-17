## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,534,885|767970|
|fromUnixToISOString(new Date())|2,916,085|1458050|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:01:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().toISOString()","samples":767970,"opsSec":1534885.8434724747},{"name":"fromUnixToISOString(new Date())","samples":1458050,"opsSec":2916085.168790831}]}-->
