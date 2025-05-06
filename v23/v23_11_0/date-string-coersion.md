## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,070,421|536209|
|Using brackets {}|1,083,416|541709|
|Using '' + |1,074,407|537206|
|Using date.toString()|1,179,230|589734|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:38:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":536209,"opsSec":1070421.7341137123},{"name":"Using brackets {}","samples":541709,"opsSec":1083416.663063838},{"name":"Using '' + ","samples":537206,"opsSec":1074407.6916251564},{"name":"Using date.toString()","samples":589734,"opsSec":1179230.319053813}]}-->
