## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|921,612|460854|
|Using brackets {}|925,479|462773|
|Using '' + |912,946|456474|
|Using date.toString()|1,021,513|510757|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:08:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using String()","samples":460854,"opsSec":921612.4803960818},{"name":"Using brackets {}","samples":462773,"opsSec":925479.195209773},{"name":"Using '' + ","samples":456474,"opsSec":912946.8186468167},{"name":"Using date.toString()","samples":510757,"opsSec":1021513.526017724}]}-->
