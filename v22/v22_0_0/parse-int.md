## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|129,739,690|64975525|
|Using parseInt(x, 10) - big number (10 len)|99,082,733|49541390|
|Using + - small number (2 len)|96,304,636|48153182|
|Using + - big number (10 len)|96,747,534|48373789|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:30:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":129739690.81022167,"samples":64975525},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":99082733.03478456,"samples":49541390},{"name":"Using + - small number (2 len)","opsSec":96304636.48743068,"samples":48153182},{"name":"Using + - big number (10 len)","opsSec":96747534.4636095,"samples":48373789}]}-->
