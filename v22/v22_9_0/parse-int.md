## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|138,702,748|69351386|
|Using parseInt(x, 10) - big number (10 len)|94,359,732|47184644|
|Using + - small number (2 len)|94,888,625|47447221|
|Using + - big number (10 len)|97,106,876|48568022|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:36:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":138702748.42053276,"samples":69351386},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":94359732.00122078,"samples":47184644},{"name":"Using + - small number (2 len)","opsSec":94888625.51703304,"samples":47447221},{"name":"Using + - big number (10 len)","opsSec":97106876.39596444,"samples":48568022}]}-->
