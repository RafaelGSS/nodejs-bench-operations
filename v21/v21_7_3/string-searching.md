## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,051,575|4025788|
|Using indexof|7,811,453|3905727|
|Using RegExp.test|7,200,823|3600412|
|Using RegExp.text with cached regex pattern|7,488,143|3744072|
|Using new RegExp.test|3,351,263|1675632|
|Using new RegExp.test with cached regex pattern|3,629,364|1814683|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:14:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":8051575.951721722,"samples":4025788},{"name":"Using indexof","opsSec":7811453.484468136,"samples":3905727},{"name":"Using RegExp.test","opsSec":7200823.539062155,"samples":3600412},{"name":"Using RegExp.text with cached regex pattern","opsSec":7488143.970092146,"samples":3744072},{"name":"Using new RegExp.test","opsSec":3351263.43028912,"samples":1675632},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3629364.9329789714,"samples":1814683}]}-->
