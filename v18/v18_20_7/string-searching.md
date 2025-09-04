## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,771,710|7885857|
|Using indexof|15,757,132|7878569|
|Using RegExp.test|13,344,486|6674066|
|Using RegExp.text with cached regex pattern|13,989,487|6994746|
|Using new RegExp.test|4,164,440|2083999|
|Using new RegExp.test with cached regex pattern|4,755,686|2379212|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:44:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":7885857,"opsSec":15771710.814114414},{"name":"Using indexof","samples":7878569,"opsSec":15757132.579546392},{"name":"Using RegExp.test","samples":6674066,"opsSec":13344486.446436672},{"name":"Using RegExp.text with cached regex pattern","samples":6994746,"opsSec":13989487.21559537},{"name":"Using new RegExp.test","samples":2083999,"opsSec":4164440.227096307},{"name":"Using new RegExp.test with cached regex pattern","samples":2379212,"opsSec":4755686.084941294}]}-->
