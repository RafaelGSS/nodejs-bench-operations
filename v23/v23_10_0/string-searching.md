## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,302,046|8151607|
|Using indexof|16,288,343|8144273|
|Using RegExp.test|12,924,820|6462411|
|Using RegExp.text with cached regex pattern|14,459,633|7229923|
|Using new RegExp.test|4,773,294|2388187|
|Using new RegExp.test with cached regex pattern|5,429,068|2714630|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:17:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using includes","samples":8151607,"opsSec":16302046.186619377},{"name":"Using indexof","samples":8144273,"opsSec":16288343.731347542},{"name":"Using RegExp.test","samples":6462411,"opsSec":12924820.604119373},{"name":"Using RegExp.text with cached regex pattern","samples":7229923,"opsSec":14459633.848252177},{"name":"Using new RegExp.test","samples":2388187,"opsSec":4773294.442264451},{"name":"Using new RegExp.test with cached regex pattern","samples":2714630,"opsSec":5429068.549326676}]}-->
