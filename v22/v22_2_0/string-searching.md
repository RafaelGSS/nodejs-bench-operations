## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,741,195|7870598|
|Using indexof|14,868,223|7434112|
|Using RegExp.test|8,323,630|4161816|
|Using RegExp.text with cached regex pattern|8,437,602|4218802|
|Using new RegExp.test|3,822,171|1911086|
|Using new RegExp.test with cached regex pattern|3,917,820|1958911|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:41:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Using includes","opsSec":15741195.590714753,"samples":7870598},{"name":"Using indexof","opsSec":14868223.76211951,"samples":7434112},{"name":"Using RegExp.test","opsSec":8323630.0023300005,"samples":4161816},{"name":"Using RegExp.text with cached regex pattern","opsSec":8437602.58247937,"samples":4218802},{"name":"Using new RegExp.test","opsSec":3822171.5031106533,"samples":1911086},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3917820.9265125836,"samples":1958911}]}-->
