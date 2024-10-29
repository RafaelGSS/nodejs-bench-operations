## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|129,631,804|64815943|
|Using indexof|15,867,883|7935188|
|Using RegExp.test|13,302,063|6651035|
|Using RegExp.text with cached regex pattern|14,065,477|7032742|
|Using new RegExp.test|4,776,277|2388201|
|Using new RegExp.test with cached regex pattern|5,410,562|2705283|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:54:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":129631804.85049015,"samples":64815943},{"name":"Using indexof","opsSec":15867883.504594866,"samples":7935188},{"name":"Using RegExp.test","opsSec":13302063.96086296,"samples":6651035},{"name":"Using RegExp.text with cached regex pattern","opsSec":14065477.95184448,"samples":7032742},{"name":"Using new RegExp.test","opsSec":4776277.167219957,"samples":2388201},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5410562.591345568,"samples":2705283}]}-->
