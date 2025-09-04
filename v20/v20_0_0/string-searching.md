## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|14,905,838|7453820|
|Using indexof|15,131,734|7565869|
|Using RegExp.test|12,710,845|6356166|
|Using RegExp.text with cached regex pattern|13,424,633|6712393|
|Using new RegExp.test|4,329,059|2164559|
|Using new RegExp.test with cached regex pattern|5,101,433|2551071|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:43:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":7453820,"opsSec":14905838.539977415},{"name":"Using indexof","samples":7565869,"opsSec":15131734.822335687},{"name":"Using RegExp.test","samples":6356166,"opsSec":12710845.64455371},{"name":"Using RegExp.text with cached regex pattern","samples":6712393,"opsSec":13424633.25452283},{"name":"Using new RegExp.test","samples":2164559,"opsSec":4329059.488431954},{"name":"Using new RegExp.test with cached regex pattern","samples":2551071,"opsSec":5101433.074251404}]}-->
