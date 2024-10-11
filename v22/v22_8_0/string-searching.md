## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|130,199,905|65261501|
|Using indexof|15,045,859|7526678|
|Using RegExp.test|11,712,602|5856354|
|Using RegExp.text with cached regex pattern|12,939,963|6469984|
|Using new RegExp.test|4,559,582|2279857|
|Using new RegExp.test with cached regex pattern|5,159,594|2579800|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:39:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using includes","opsSec":130199905.72594483,"samples":65261501},{"name":"Using indexof","opsSec":15045859.190016545,"samples":7526678},{"name":"Using RegExp.test","opsSec":11712602.235201817,"samples":5856354},{"name":"Using RegExp.text with cached regex pattern","opsSec":12939963.05693411,"samples":6469984},{"name":"Using new RegExp.test","opsSec":4559582.419570535,"samples":2279857},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5159594.479233908,"samples":2579800}]}-->
