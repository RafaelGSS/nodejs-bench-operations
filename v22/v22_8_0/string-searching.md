## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|130,509,504|65255424|
|Using indexof|15,195,328|7597667|
|Using RegExp.test|12,685,071|6343299|
|Using RegExp.text with cached regex pattern|13,537,473|6768800|
|Using new RegExp.test|4,659,080|2329839|
|Using new RegExp.test with cached regex pattern|5,299,526|2649765|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:02:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using includes","opsSec":130509504.27414401,"samples":65255424},{"name":"Using indexof","opsSec":15195328.013040764,"samples":7597667},{"name":"Using RegExp.test","opsSec":12685071.656067912,"samples":6343299},{"name":"Using RegExp.text with cached regex pattern","opsSec":13537473.343399398,"samples":6768800},{"name":"Using new RegExp.test","opsSec":4659080.39839362,"samples":2329839},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5299526.47051537,"samples":2649765}]}-->
