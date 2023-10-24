## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|755,081|96|
|Using brackets {}|774,894|97|
|Using '' + |768,008|96|
|Using date.toString()|838,708|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":755081.1598400435,"samples":5},{"name":"Using brackets {}","opsSec":774894.4555005629,"samples":7},{"name":"Using '' + ","opsSec":768008.4789810458,"samples":4},{"name":"Using date.toString()","opsSec":838707.9709677681,"samples":5}]}-->
