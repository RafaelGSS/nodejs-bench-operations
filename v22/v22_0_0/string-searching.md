## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,649,289|7824647|
|Using indexof|15,907,823|7954858|
|Using RegExp.test|13,298,580|6650226|
|Using RegExp.text with cached regex pattern|14,272,884|7136479|
|Using new RegExp.test|4,744,731|2373143|
|Using new RegExp.test with cached regex pattern|5,268,936|2634473|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:44:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":7824647,"opsSec":15649289.180018933},{"name":"Using indexof","samples":7954858,"opsSec":15907823.827986958},{"name":"Using RegExp.test","samples":6650226,"opsSec":13298580.570547791},{"name":"Using RegExp.text with cached regex pattern","samples":7136479,"opsSec":14272884.865737947},{"name":"Using new RegExp.test","samples":2373143,"opsSec":4744731.995887242},{"name":"Using new RegExp.test with cached regex pattern","samples":2634473,"opsSec":5268936.389460026}]}-->
