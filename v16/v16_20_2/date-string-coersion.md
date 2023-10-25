## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|720,962|96|
|Using brackets {}|716,072|91|
|Using '' + |734,424|97|
|Using date.toString()|800,700|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:51:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":720961.5615429272,"samples":6},{"name":"Using brackets {}","opsSec":716072.1233094444,"samples":7},{"name":"Using '' + ","opsSec":734423.7674999037,"samples":6},{"name":"Using date.toString()","opsSec":800700.2838869216,"samples":6}]}-->
