## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,046,674|8023340|
|Using indexof|16,034,753|8017580|
|Using RegExp.test|12,746,467|6373236|
|Using RegExp.text with cached regex pattern|13,463,988|6732384|
|Using new RegExp.test|4,682,130|2341258|
|Using new RegExp.test with cached regex pattern|5,377,863|2688933|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:03:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":8023340,"opsSec":16046674.768784024},{"name":"Using indexof","samples":8017580,"opsSec":16034753.4869296},{"name":"Using RegExp.test","samples":6373236,"opsSec":12746467.181835406},{"name":"Using RegExp.text with cached regex pattern","samples":6732384,"opsSec":13463988.354290355},{"name":"Using new RegExp.test","samples":2341258,"opsSec":4682130.979005334},{"name":"Using new RegExp.test with cached regex pattern","samples":2688933,"opsSec":5377863.601472833}]}-->
