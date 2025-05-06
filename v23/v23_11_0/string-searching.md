## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,934,704|7971904|
|Using indexof|15,774,449|7887324|
|Using RegExp.test|13,286,070|6643316|
|Using RegExp.text with cached regex pattern|14,441,047|7220594|
|Using new RegExp.test|4,696,442|2348497|
|Using new RegExp.test with cached regex pattern|5,294,552|2648096|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:14:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using includes","samples":7971904,"opsSec":15934704.535168465},{"name":"Using indexof","samples":7887324,"opsSec":15774449.21039105},{"name":"Using RegExp.test","samples":6643316,"opsSec":13286070.743227523},{"name":"Using RegExp.text with cached regex pattern","samples":7220594,"opsSec":14441047.604135193},{"name":"Using new RegExp.test","samples":2348497,"opsSec":4696442.8912124885},{"name":"Using new RegExp.test with cached regex pattern","samples":2648096,"opsSec":5294552.361846373}]}-->
