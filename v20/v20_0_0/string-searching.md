## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,064,513|8032257|
|Using indexof|15,974,843|7987422|
|Using RegExp.test|7,933,169|3966585|
|Using RegExp.text with cached regex pattern|7,777,411|3888706|
|Using new RegExp.test|3,479,124|1739563|
|Using new RegExp.test with cached regex pattern|3,792,056|1896029|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:41:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":16064513.451281415,"samples":8032257},{"name":"Using indexof","opsSec":15974843.394297764,"samples":7987422},{"name":"Using RegExp.test","opsSec":7933169.413099842,"samples":3966585},{"name":"Using RegExp.text with cached regex pattern","opsSec":7777411.785917642,"samples":3888706},{"name":"Using new RegExp.test","opsSec":3479124.127664515,"samples":1739563},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3792056.382316736,"samples":1896029}]}-->
