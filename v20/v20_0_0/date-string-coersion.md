## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,090,838|99|
|Using brackets {}|1,093,699|99|
|Using '' + |1,080,938|97|
|Using date.toString()|1,202,522|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:25:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":1090838.35088016,"samples":4},{"name":"Using brackets {}","opsSec":1093698.6763126089,"samples":6},{"name":"Using '' + ","opsSec":1080937.6187137724,"samples":6},{"name":"Using date.toString()","opsSec":1202522.4100635007,"samples":5}]}-->
