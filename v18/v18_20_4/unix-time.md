## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,292,372|4146191|
|Date.now()|17,298,140|8676716|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:46:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Date().getTime()","opsSec":8292372.347678588,"samples":4146191},{"name":"Date.now()","opsSec":17298140.190100085,"samples":8676716}]}-->
