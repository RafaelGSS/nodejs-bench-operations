## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|900,461|450282|
|Using brackets {}|896,553|448278|
|Using '' + |897,772|448981|
|Using date.toString()|975,127|487694|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:55:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":450282,"opsSec":900461.5923040303},{"name":"Using brackets {}","samples":448278,"opsSec":896553.5703398244},{"name":"Using '' + ","samples":448981,"opsSec":897772.6166620603},{"name":"Using date.toString()","samples":487694,"opsSec":975127.0969441958}]}-->
