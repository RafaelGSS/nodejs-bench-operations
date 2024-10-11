## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|129,455,984|64728022|
|Using parseInt(x, 10) - big number (10 len)|99,003,035|49501830|
|Using + - small number (2 len)|98,904,010|49459885|
|Using + - big number (10 len)|98,001,494|49006299|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:35:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":129455984.70915902,"samples":64728022},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":99003035.2908473,"samples":49501830},{"name":"Using + - small number (2 len)","opsSec":98904010.43716893,"samples":49459885},{"name":"Using + - big number (10 len)","opsSec":98001494.82264256,"samples":49006299}]}-->
