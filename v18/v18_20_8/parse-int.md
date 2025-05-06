## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|92,467,764|46233942|
|Using parseInt(x, 10) - big number (10 len)|16,126,614|8067514|
|Using + - small number (2 len)|107,057,029|53533301|
|Using + - big number (10 len)|94,170,158|47085082|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:10:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":46233942,"opsSec":92467764.34671293},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":8067514,"opsSec":16126614.293777736},{"name":"Using + - small number (2 len)","samples":53533301,"opsSec":107057029.38866018},{"name":"Using + - big number (10 len)","samples":47085082,"opsSec":94170158.3497905}]}-->
