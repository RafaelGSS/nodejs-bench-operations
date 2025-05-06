## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|995,715|497858|
|Using brackets {}|1,005,974|503049|
|Using '' + |1,001,419|500711|
|Using date.toString()|1,112,641|556321|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:37:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":497858,"opsSec":995715.838694034},{"name":"Using brackets {}","samples":503049,"opsSec":1005974.3597153447},{"name":"Using '' + ","samples":500711,"opsSec":1001419.6887233584},{"name":"Using date.toString()","samples":556321,"opsSec":1112641.3991736444}]}-->
