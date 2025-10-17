## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,599,631|8299924|
|Using indexof|16,690,329|8347348|
|Using RegExp.test|13,679,406|6839853|
|Using RegExp.text with cached regex pattern|14,128,945|7064564|
|Using new RegExp.test|4,444,249|2222126|
|Using new RegExp.test with cached regex pattern|5,390,154|2695786|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:19:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using includes","samples":8299924,"opsSec":16599631.109219927},{"name":"Using indexof","samples":8347348,"opsSec":16690329.67623406},{"name":"Using RegExp.test","samples":6839853,"opsSec":13679406.858730813},{"name":"Using RegExp.text with cached regex pattern","samples":7064564,"opsSec":14128945.425767208},{"name":"Using new RegExp.test","samples":2222126,"opsSec":4444249.813429091},{"name":"Using new RegExp.test with cached regex pattern","samples":2695786,"opsSec":5390154.260065901}]}-->
