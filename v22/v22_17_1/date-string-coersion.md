## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,091,522|545892|
|Using brackets {}|1,117,399|558726|
|Using '' + |1,088,905|544536|
|Using date.toString()|1,234,441|617221|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:10:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using String()","samples":545892,"opsSec":1091522.9229981399},{"name":"Using brackets {}","samples":558726,"opsSec":1117399.2632243729},{"name":"Using '' + ","samples":544536,"opsSec":1088905.438846263},{"name":"Using date.toString()","samples":617221,"opsSec":1234441.2494597204}]}-->
