## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,248,114|624058|
|fromUnixToISOString(new Date())|1,798,326|899164|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:34:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1248114.8769600582,"samples":624058},{"name":"fromUnixToISOString(new Date())","opsSec":1798326.5980281448,"samples":899164}]}-->
