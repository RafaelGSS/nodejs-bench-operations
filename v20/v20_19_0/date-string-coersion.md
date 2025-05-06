## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,071,184|535708|
|Using brackets {}|886,667|443334|
|Using '' + |1,034,394|517198|
|Using date.toString()|1,158,234|579278|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:38:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":535708,"opsSec":1071184.8790081353},{"name":"Using brackets {}","samples":443334,"opsSec":886667.4963728621},{"name":"Using '' + ","samples":517198,"opsSec":1034394.4215141129},{"name":"Using date.toString()","samples":579278,"opsSec":1158234.1336836542}]}-->
