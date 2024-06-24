## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,181,099|8090550|
|Using indexof|16,051,188|8025595|
|Using RegExp.test|8,496,060|4248031|
|Using RegExp.text with cached regex pattern|8,416,283|4208142|
|Using new RegExp.test|3,754,388|1877195|
|Using new RegExp.test with cached regex pattern|4,001,365|2000683|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:44:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":16181099.805818621,"samples":8090550},{"name":"Using indexof","opsSec":16051188.42700706,"samples":8025595},{"name":"Using RegExp.test","opsSec":8496060.028961439,"samples":4248031},{"name":"Using RegExp.text with cached regex pattern","opsSec":8416283.51187719,"samples":4208142},{"name":"Using new RegExp.test","opsSec":3754388.115294684,"samples":1877195},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4001365.91197963,"samples":2000683}]}-->
