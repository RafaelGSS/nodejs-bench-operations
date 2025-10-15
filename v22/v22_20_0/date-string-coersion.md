## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,018,299|509150|
|Using brackets {}|1,050,992|525632|
|Using '' + |1,118,375|559241|
|Using date.toString()|1,222,561|611281|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:27:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":509150,"opsSec":1018299.0977869993},{"name":"Using brackets {}","samples":525632,"opsSec":1050992.5685572592},{"name":"Using '' + ","samples":559241,"opsSec":1118375.6089283226},{"name":"Using date.toString()","samples":611281,"opsSec":1222561.6992498222}]}-->
