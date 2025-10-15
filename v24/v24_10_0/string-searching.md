## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,448,507|8224259|
|Using indexof|16,347,794|8174044|
|Using RegExp.test|12,350,712|6175499|
|Using RegExp.text with cached regex pattern|13,326,355|6663524|
|Using new RegExp.test|4,700,812|2350460|
|Using new RegExp.test with cached regex pattern|5,210,116|2605201|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:02:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":8224259,"opsSec":16448507.769028168},{"name":"Using indexof","samples":8174044,"opsSec":16347794.785952717},{"name":"Using RegExp.test","samples":6175499,"opsSec":12350712.698536664},{"name":"Using RegExp.text with cached regex pattern","samples":6663524,"opsSec":13326355.376005687},{"name":"Using new RegExp.test","samples":2350460,"opsSec":4700812.426608429},{"name":"Using new RegExp.test with cached regex pattern","samples":2605201,"opsSec":5210116.506455912}]}-->
