## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,235,237|8124086|
|Using indexof|16,147,159|8074161|
|Using RegExp.test|12,660,113|6331275|
|Using RegExp.text with cached regex pattern|13,446,477|6723256|
|Using new RegExp.test|4,667,399|2333787|
|Using new RegExp.test with cached regex pattern|5,188,429|2594216|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:45:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using includes","samples":8124086,"opsSec":16235237.710820543},{"name":"Using indexof","samples":8074161,"opsSec":16147159.630566834},{"name":"Using RegExp.test","samples":6331275,"opsSec":12660113.459883738},{"name":"Using RegExp.text with cached regex pattern","samples":6723256,"opsSec":13446477.469445858},{"name":"Using new RegExp.test","samples":2333787,"opsSec":4667399.70062558},{"name":"Using new RegExp.test with cached regex pattern","samples":2594216,"opsSec":5188429.302016763}]}-->
