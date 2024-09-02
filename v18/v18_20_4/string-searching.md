## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,313,526|4156764|
|Using indexof|8,292,643|4146322|
|Using RegExp.test|7,631,183|3815592|
|Using RegExp.text with cached regex pattern|7,740,790|3870396|
|Using new RegExp.test|3,177,946|1588974|
|Using new RegExp.test with cached regex pattern|3,509,829|1754915|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:09:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":8313526.326674746,"samples":4156764},{"name":"Using indexof","opsSec":8292643.604205229,"samples":4146322},{"name":"Using RegExp.test","opsSec":7631183.757505963,"samples":3815592},{"name":"Using RegExp.text with cached regex pattern","opsSec":7740790.75673483,"samples":3870396},{"name":"Using new RegExp.test","opsSec":3177946.5851244917,"samples":1588974},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3509829.612740675,"samples":1754915}]}-->
