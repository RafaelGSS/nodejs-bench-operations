## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,229,067|8114537|
|Using indexof|16,299,638|8149850|
|Using RegExp.test|12,752,789|6377793|
|Using RegExp.text with cached regex pattern|13,984,258|6992134|
|Using new RegExp.test|4,950,517|2475741|
|Using new RegExp.test with cached regex pattern|5,506,047|2753025|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:03:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":8114537,"opsSec":16229067.34608239},{"name":"Using indexof","samples":8149850,"opsSec":16299638.941552525},{"name":"Using RegExp.test","samples":6377793,"opsSec":12752789.950803285},{"name":"Using RegExp.text with cached regex pattern","samples":6992134,"opsSec":13984258.770389212},{"name":"Using new RegExp.test","samples":2475741,"opsSec":4950517.243199646},{"name":"Using new RegExp.test with cached regex pattern","samples":2753025,"opsSec":5506047.830617155}]}-->
