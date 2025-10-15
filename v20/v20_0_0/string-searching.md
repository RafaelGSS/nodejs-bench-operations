## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,195,588|7597796|
|Using indexof|15,116,588|7558297|
|Using RegExp.test|12,732,162|6366083|
|Using RegExp.text with cached regex pattern|13,385,215|6692707|
|Using new RegExp.test|4,416,444|2208285|
|Using new RegExp.test with cached regex pattern|5,110,736|2555373|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:00:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":7597796,"opsSec":15195588.170711782},{"name":"Using indexof","samples":7558297,"opsSec":15116588.195230132},{"name":"Using RegExp.test","samples":6366083,"opsSec":12732162.460458837},{"name":"Using RegExp.text with cached regex pattern","samples":6692707,"opsSec":13385215.122473711},{"name":"Using new RegExp.test","samples":2208285,"opsSec":4416444.5553088505},{"name":"Using new RegExp.test with cached regex pattern","samples":2555373,"opsSec":5110736.299822503}]}-->
