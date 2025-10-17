## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,958,597|7979302|
|Using indexof|15,787,823|7893914|
|Using RegExp.test|12,272,104|6136055|
|Using RegExp.text with cached regex pattern|13,333,760|6666882|
|Using new RegExp.test|4,630,379|2316007|
|Using new RegExp.test with cached regex pattern|5,255,867|2628087|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:20:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using includes","samples":7979302,"opsSec":15958597.68039532},{"name":"Using indexof","samples":7893914,"opsSec":15787823.137350475},{"name":"Using RegExp.test","samples":6136055,"opsSec":12272104.011213243},{"name":"Using RegExp.text with cached regex pattern","samples":6666882,"opsSec":13333760.026539512},{"name":"Using new RegExp.test","samples":2316007,"opsSec":4630379.4112425195},{"name":"Using new RegExp.test with cached regex pattern","samples":2628087,"opsSec":5255867.425253085}]}-->
