## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,365,866|4182934|
|Using indexof|8,317,458|4158730|
|Using RegExp.test|7,233,120|3616561|
|Using RegExp.text with cached regex pattern|7,879,090|3939546|
|Using new RegExp.test|3,383,130|1691566|
|Using new RegExp.test with cached regex pattern|3,636,872|1818437|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:12:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":8365866.215787705,"samples":4182934},{"name":"Using indexof","opsSec":8317458.523319369,"samples":4158730},{"name":"Using RegExp.test","opsSec":7233120.2530711135,"samples":3616561},{"name":"Using RegExp.text with cached regex pattern","opsSec":7879090.914566703,"samples":3939546},{"name":"Using new RegExp.test","opsSec":3383130.101034221,"samples":1691566},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3636872.6755077806,"samples":1818437}]}-->
