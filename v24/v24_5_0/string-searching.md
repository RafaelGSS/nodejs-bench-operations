## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,443,279|7721670|
|Using indexof|15,429,820|7714911|
|Using RegExp.test|12,351,141|6177050|
|Using RegExp.text with cached regex pattern|13,542,678|6771454|
|Using new RegExp.test|4,744,449|2372246|
|Using new RegExp.test with cached regex pattern|5,328,153|2664418|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:45:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using includes","samples":7721670,"opsSec":15443279.060820825},{"name":"Using indexof","samples":7714911,"opsSec":15429820.858193258},{"name":"Using RegExp.test","samples":6177050,"opsSec":12351141.259409025},{"name":"Using RegExp.text with cached regex pattern","samples":6771454,"opsSec":13542678.234921066},{"name":"Using new RegExp.test","samples":2372246,"opsSec":4744449.432799689},{"name":"Using new RegExp.test with cached regex pattern","samples":2664418,"opsSec":5328153.751224771}]}-->
