## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,077,564|8038783|
|Using indexof|16,134,997|8067499|
|Using RegExp.test|7,885,531|3942767|
|Using RegExp.text with cached regex pattern|8,041,043|4020522|
|Using new RegExp.test|3,561,331|1780666|
|Using new RegExp.test with cached regex pattern|3,887,029|1943515|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:43:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":16077564.9388786,"samples":8038783},{"name":"Using indexof","opsSec":16134997.515932828,"samples":8067499},{"name":"Using RegExp.test","opsSec":7885531.965546121,"samples":3942767},{"name":"Using RegExp.text with cached regex pattern","opsSec":8041043.935666829,"samples":4020522},{"name":"Using new RegExp.test","opsSec":3561331.3019800335,"samples":1780666},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3887029.4946913966,"samples":1943515}]}-->
