## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,068,925|97|
|Using brackets {}|1,098,834|99|
|Using '' + |1,098,285|93|
|Using date.toString()|1,220,889|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:28:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":1068924.9407661944,"samples":5},{"name":"Using brackets {}","opsSec":1098834.1705364718,"samples":8},{"name":"Using '' + ","opsSec":1098285.2794601591,"samples":5},{"name":"Using date.toString()","opsSec":1220888.8323458058,"samples":5}]}-->
