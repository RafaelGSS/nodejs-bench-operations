## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,065,269|8033438|
|Using indexof|15,788,384|7894200|
|Using RegExp.test|13,612,723|6806600|
|Using RegExp.text with cached regex pattern|14,488,241|7244750|
|Using new RegExp.test|4,160,598|2081339|
|Using new RegExp.test with cached regex pattern|4,904,994|2453286|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:16:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using includes","samples":8033438,"opsSec":16065269.376670716},{"name":"Using indexof","samples":7894200,"opsSec":15788384.116885578},{"name":"Using RegExp.test","samples":6806600,"opsSec":13612723.200757172},{"name":"Using RegExp.text with cached regex pattern","samples":7244750,"opsSec":14488241.928000424},{"name":"Using new RegExp.test","samples":2081339,"opsSec":4160598.7241452136},{"name":"Using new RegExp.test with cached regex pattern","samples":2453286,"opsSec":4904994.8773770975}]}-->
