## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|97,267,316|48634050|
|Using backtick (`)|97,609,490|48805741|
|Using array.join|10,433,174|5216591|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:15:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using + sign","samples":48634050,"opsSec":97267316.99809818},{"name":"Using backtick (`)","samples":48805741,"opsSec":97609490.18074338},{"name":"Using array.join","samples":5216591,"opsSec":10433174.467248034}]}-->
