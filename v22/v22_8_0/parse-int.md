## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|126,903,127|63649784|
|Using parseInt(x, 10) - big number (10 len)|96,059,553|48029917|
|Using + - small number (2 len)|95,177,677|48009130|
|Using + - big number (10 len)|95,552,400|47780947|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:35:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":126903127.70517415,"samples":63649784},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":96059553.89034086,"samples":48029917},{"name":"Using + - small number (2 len)","opsSec":95177677.96899374,"samples":48009130},{"name":"Using + - big number (10 len)","opsSec":95552400.10463041,"samples":47780947}]}-->
