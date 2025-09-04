## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|94,843,639|47421858|
|Using backtick (`)|87,656,305|43848443|
|Using array.join|10,259,958|5130405|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:32:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":47421858,"opsSec":94843639.36633939},{"name":"Using backtick (`)","samples":43848443,"opsSec":87656305.33813111},{"name":"Using array.join","samples":5130405,"opsSec":10259958.526041925}]}-->
