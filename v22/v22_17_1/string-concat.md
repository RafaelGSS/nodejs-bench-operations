## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|98,836,064|49418802|
|Using backtick (`)|98,727,013|49363912|
|Using array.join|10,490,403|5245202|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:13:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using + sign","samples":49418802,"opsSec":98836064.33178984},{"name":"Using backtick (`)","samples":49363912,"opsSec":98727013.45121956},{"name":"Using array.join","samples":5245202,"opsSec":10490403.517441439}]}-->
