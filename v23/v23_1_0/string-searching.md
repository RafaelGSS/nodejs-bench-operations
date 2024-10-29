## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|129,384,492|64781546|
|Using indexof|16,146,598|8073682|
|Using RegExp.test|13,137,283|6568972|
|Using RegExp.text with cached regex pattern|14,306,616|7153313|
|Using new RegExp.test|4,585,027|2292640|
|Using new RegExp.test with cached regex pattern|5,195,425|2597886|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:56:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":129384492.23460919,"samples":64781546},{"name":"Using indexof","opsSec":16146598.586640598,"samples":8073682},{"name":"Using RegExp.test","opsSec":13137283.457387764,"samples":6568972},{"name":"Using RegExp.text with cached regex pattern","opsSec":14306616.185661297,"samples":7153313},{"name":"Using new RegExp.test","opsSec":4585027.814300157,"samples":2292640},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5195425.735265596,"samples":2597886}]}-->
