## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,050,963|525483|
|Using brackets {}|1,052,623|526312|
|Using '' + |1,044,849|522425|
|Using date.toString()|1,144,181|572092|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:26:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":525483,"opsSec":1050963.6416375882},{"name":"Using brackets {}","samples":526312,"opsSec":1052623.5010564607},{"name":"Using '' + ","samples":522425,"opsSec":1044849.4566782826},{"name":"Using date.toString()","samples":572092,"opsSec":1144181.9336074279}]}-->
