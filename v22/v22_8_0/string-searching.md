## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|121,691,515|60885802|
|Using indexof|15,186,408|7598606|
|Using RegExp.test|12,667,582|6333794|
|Using RegExp.text with cached regex pattern|13,374,371|6687266|
|Using new RegExp.test|4,463,791|2232067|
|Using new RegExp.test with cached regex pattern|5,049,096|2524550|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:55:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":121691515.89279456,"samples":60885802},{"name":"Using indexof","opsSec":15186408.54082814,"samples":7598606},{"name":"Using RegExp.test","opsSec":12667582.755620738,"samples":6333794},{"name":"Using RegExp.text with cached regex pattern","opsSec":13374371.72152929,"samples":6687266},{"name":"Using new RegExp.test","opsSec":4463791.511132517,"samples":2232067},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5049096.051606887,"samples":2524550}]}-->
