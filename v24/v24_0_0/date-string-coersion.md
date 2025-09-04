## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,118,954|559543|
|Using brackets {}|1,136,613|568317|
|Using '' + |1,142,413|571208|
|Using date.toString()|1,259,219|629746|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:56:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":559543,"opsSec":1118954.1603450116},{"name":"Using brackets {}","samples":568317,"opsSec":1136613.670527889},{"name":"Using '' + ","samples":571208,"opsSec":1142413.8065654912},{"name":"Using date.toString()","samples":629746,"opsSec":1259219.2556276696}]}-->
