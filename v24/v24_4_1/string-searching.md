## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,839,262|8419769|
|Using indexof|16,644,511|8322256|
|Using RegExp.test|13,255,920|6628919|
|Using RegExp.text with cached regex pattern|14,131,808|7066351|
|Using new RegExp.test|4,796,283|2398804|
|Using new RegExp.test with cached regex pattern|5,280,272|2640137|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:20:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using includes","samples":8419769,"opsSec":16839262.240241554},{"name":"Using indexof","samples":8322256,"opsSec":16644511.900132928},{"name":"Using RegExp.test","samples":6628919,"opsSec":13255920.425063152},{"name":"Using RegExp.text with cached regex pattern","samples":7066351,"opsSec":14131808.982726762},{"name":"Using new RegExp.test","samples":2398804,"opsSec":4796283.573439164},{"name":"Using new RegExp.test with cached regex pattern","samples":2640137,"opsSec":5280272.479281526}]}-->
