## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|17,460,270|8732868|
|Using indexof|16,684,005|8342005|
|Using RegExp.test|14,101,023|7052396|
|Using RegExp.text with cached regex pattern|15,452,354|7727754|
|Using new RegExp.test|4,760,385|2380590|
|Using new RegExp.test with cached regex pattern|5,403,502|2702915|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:42:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":8732868,"opsSec":17460270.83046844},{"name":"Using indexof","samples":8342005,"opsSec":16684005.862366544},{"name":"Using RegExp.test","samples":7052396,"opsSec":14101023.839803385},{"name":"Using RegExp.text with cached regex pattern","samples":7727754,"opsSec":15452354.916074665},{"name":"Using new RegExp.test","samples":2380590,"opsSec":4760385.872428762},{"name":"Using new RegExp.test with cached regex pattern","samples":2702915,"opsSec":5403502.300892831}]}-->
