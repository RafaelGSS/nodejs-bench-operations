## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,081,791|8040898|
|Using indexof|16,112,840|8056422|
|Using RegExp.test|13,332,801|6666710|
|Using RegExp.text with cached regex pattern|14,391,411|7195707|
|Using new RegExp.test|4,546,085|2273043|
|Using new RegExp.test with cached regex pattern|5,415,276|2710992|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:14:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using includes","samples":8040898,"opsSec":16081791.690079827},{"name":"Using indexof","samples":8056422,"opsSec":16112840.132918367},{"name":"Using RegExp.test","samples":6666710,"opsSec":13332801.571331915},{"name":"Using RegExp.text with cached regex pattern","samples":7195707,"opsSec":14391411.582242856},{"name":"Using new RegExp.test","samples":2273043,"opsSec":4546085.190796835},{"name":"Using new RegExp.test with cached regex pattern","samples":2710992,"opsSec":5415276.843881688}]}-->
