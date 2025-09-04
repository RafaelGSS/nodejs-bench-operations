## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|14,756,601|7378304|
|Using indexof|16,012,017|8006033|
|Using RegExp.test|13,593,276|6797564|
|Using RegExp.text with cached regex pattern|14,597,648|7299091|
|Using new RegExp.test|4,243,154|2122275|
|Using new RegExp.test with cached regex pattern|4,820,932|2411374|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:44:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":7378304,"opsSec":14756601.27098982},{"name":"Using indexof","samples":8006033,"opsSec":16012017.163347654},{"name":"Using RegExp.test","samples":6797564,"opsSec":13593276.514179109},{"name":"Using RegExp.text with cached regex pattern","samples":7299091,"opsSec":14597648.309977787},{"name":"Using new RegExp.test","samples":2122275,"opsSec":4243154.876135656},{"name":"Using new RegExp.test with cached regex pattern","samples":2411374,"opsSec":4820932.803097246}]}-->
