## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,459,652|729848|
|fromUnixToISOString(new Date())|2,084,091|1042476|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:12:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1459652.4673248143,"samples":729848},{"name":"fromUnixToISOString(new Date())","opsSec":2084091.23697367,"samples":1042476}]}-->
