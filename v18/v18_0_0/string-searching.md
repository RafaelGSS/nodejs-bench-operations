## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|14,892,178|7449063|
|Using indexof|15,783,475|7891740|
|Using RegExp.test|13,532,878|6767172|
|Using RegExp.text with cached regex pattern|14,584,102|7292504|
|Using new RegExp.test|4,285,199|2143434|
|Using new RegExp.test with cached regex pattern|4,841,194|2420881|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:15:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using includes","samples":7449063,"opsSec":14892178.30226093},{"name":"Using indexof","samples":7891740,"opsSec":15783475.359658245},{"name":"Using RegExp.test","samples":6767172,"opsSec":13532878.849338498},{"name":"Using RegExp.text with cached regex pattern","samples":7292504,"opsSec":14584102.677242206},{"name":"Using new RegExp.test","samples":2143434,"opsSec":4285199.89166777},{"name":"Using new RegExp.test with cached regex pattern","samples":2420881,"opsSec":4841194.563585202}]}-->
