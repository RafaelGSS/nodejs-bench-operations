## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,074,759|537380|
|Using brackets {}|1,037,194|518603|
|Using '' + |1,085,269|542673|
|Using date.toString()|1,171,613|585807|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:56:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":537380,"opsSec":1074759.4067328076},{"name":"Using brackets {}","samples":518603,"opsSec":1037194.8978658133},{"name":"Using '' + ","samples":542673,"opsSec":1085269.8856818376},{"name":"Using date.toString()","samples":585807,"opsSec":1171613.1142604856}]}-->
