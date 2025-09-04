## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|903,709|451863|
|Using brackets {}|924,488|462350|
|Using '' + |913,093|456587|
|Using date.toString()|1,186,492|593247|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:55:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":451863,"opsSec":903709.9464965104},{"name":"Using brackets {}","samples":462350,"opsSec":924488.4326711602},{"name":"Using '' + ","samples":456587,"opsSec":913093.1729923267},{"name":"Using date.toString()","samples":593247,"opsSec":1186492.1775480153}]}-->
