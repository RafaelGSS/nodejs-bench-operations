## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|909,321,496|97|
|Using indexof|908,349,563|97|
|Using RegExp.test|17,845,281|97|
|Using RegExp.text with cached regex pattern|18,852,089|97|
|Using new RegExp.test|3,889,434|99|
|Using new RegExp.test with cached regex pattern|4,264,104|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:32:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":909321496.0622237,"samples":6},{"name":"Using indexof","opsSec":908349563.4513645,"samples":9},{"name":"Using RegExp.test","opsSec":17845280.981857985,"samples":8},{"name":"Using RegExp.text with cached regex pattern","opsSec":18852088.727088086,"samples":5},{"name":"Using new RegExp.test","opsSec":3889434.3325289474,"samples":5},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4264103.504129339,"samples":6}]}-->
