## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,988,016|7994045|
|Using indexof|15,986,788|7993844|
|Using RegExp.test|13,322,280|6662213|
|Using RegExp.text with cached regex pattern|14,538,493|7269413|
|Using new RegExp.test|4,697,337|2349778|
|Using new RegExp.test with cached regex pattern|5,410,513|2705605|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:42:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":7994045,"opsSec":15988016.16734134},{"name":"Using indexof","samples":7993844,"opsSec":15986788.487358969},{"name":"Using RegExp.test","samples":6662213,"opsSec":13322280.180331353},{"name":"Using RegExp.text with cached regex pattern","samples":7269413,"opsSec":14538493.853569422},{"name":"Using new RegExp.test","samples":2349778,"opsSec":4697337.963986785},{"name":"Using new RegExp.test with cached regex pattern","samples":2705605,"opsSec":5410513.515416187}]}-->
