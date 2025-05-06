## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,412,979|8206492|
|Using indexof|15,961,476|7980946|
|Using RegExp.test|13,992,131|6997368|
|Using RegExp.text with cached regex pattern|14,829,143|7414572|
|Using new RegExp.test|4,828,037|2414021|
|Using new RegExp.test with cached regex pattern|5,500,319|2750612|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:15:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using includes","samples":8206492,"opsSec":16412979.010454379},{"name":"Using indexof","samples":7980946,"opsSec":15961476.203544898},{"name":"Using RegExp.test","samples":6997368,"opsSec":13992131.224851182},{"name":"Using RegExp.text with cached regex pattern","samples":7414572,"opsSec":14829143.822050273},{"name":"Using new RegExp.test","samples":2414021,"opsSec":4828037.896167789},{"name":"Using new RegExp.test with cached regex pattern","samples":2750612,"opsSec":5500319.076504895}]}-->
