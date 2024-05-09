## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,660,986|8330494|
|Using parseInt(x, 10) - big number (10 len)|8,929,974|4464988|
|Using + - small number (2 len)|17,201,727|8600864|
|Using + - big number (10 len)|17,199,116|8599559|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:19:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16660986.47464113,"samples":8330494},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":8929974.526682287,"samples":4464988},{"name":"Using + - small number (2 len)","opsSec":17201727.14694804,"samples":8600864},{"name":"Using + - big number (10 len)","opsSec":17199116.105527963,"samples":8599559}]}-->
