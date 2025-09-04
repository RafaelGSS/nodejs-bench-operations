## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|998,275|499162|
|Using brackets {}|1,008,752|504536|
|Using '' + |1,016,381|508191|
|Using date.toString()|1,121,951|560976|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:56:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":499162,"opsSec":998275.7293753817},{"name":"Using brackets {}","samples":504536,"opsSec":1008752.0541109976},{"name":"Using '' + ","samples":508191,"opsSec":1016381.3088607099},{"name":"Using date.toString()","samples":560976,"opsSec":1121951.605073035}]}-->
