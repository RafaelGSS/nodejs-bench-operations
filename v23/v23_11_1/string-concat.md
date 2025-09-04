## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|85,087,874|42544311|
|Using backtick (`)|95,259,828|47658122|
|Using array.join|9,867,346|4933676|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:34:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":42544311,"opsSec":85087874.41793537},{"name":"Using backtick (`)","samples":47658122,"opsSec":95259828.27190252},{"name":"Using array.join","samples":4933676,"opsSec":9867346.217735115}]}-->
