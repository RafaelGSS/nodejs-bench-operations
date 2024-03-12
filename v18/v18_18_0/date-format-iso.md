## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,489,441|94|
|fromUnixToISOString(new Date())|2,054,670|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:39:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606483459472656},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2489440.6678603315,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2054669.7332449162,"samples":8}]}-->
