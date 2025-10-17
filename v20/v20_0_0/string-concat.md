## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|99,269,627|49656503|
|Using backtick (`)|99,607,690|49867139|
|Using array.join|10,737,194|5371184|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:14:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using + sign","samples":49656503,"opsSec":99269627.15832436},{"name":"Using backtick (`)","samples":49867139,"opsSec":99607690.57036175},{"name":"Using array.join","samples":5371184,"opsSec":10737194.111222401}]}-->
