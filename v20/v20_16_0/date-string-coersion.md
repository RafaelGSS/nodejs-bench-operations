## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|965,237|482619|
|Using brackets {}|971,754|485878|
|Using '' + |952,095|476048|
|Using date.toString()|1,058,561|529281|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:11:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using String()","opsSec":965237.0212494644,"samples":482619},{"name":"Using brackets {}","opsSec":971754.3344128251,"samples":485878},{"name":"Using '' + ","opsSec":952095.7010423664,"samples":476048},{"name":"Using date.toString()","opsSec":1058561.3458092308,"samples":529281}]}-->
