## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,486,039|743066|
|fromUnixToISOString(new Date())|2,265,223|1132612|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:21:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1486039.8714721284,"samples":743066},{"name":"fromUnixToISOString(new Date())","opsSec":2265223.719112259,"samples":1132612}]}-->
