## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,038,354|519178|
|Using brackets {}|1,038,383|519212|
|Using '' + |1,048,051|524026|
|Using date.toString()|1,153,866|577002|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:37:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":519178,"opsSec":1038354.4424683363},{"name":"Using brackets {}","samples":519212,"opsSec":1038383.6982519033},{"name":"Using '' + ","samples":524026,"opsSec":1048051.1322136626},{"name":"Using date.toString()","samples":577002,"opsSec":1153866.362204851}]}-->
