## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|877,003|438503|
|Using brackets {}|926,055|463029|
|Using '' + |928,161|464081|
|Using date.toString()|1,008,634|504348|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:35:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":877003.8671265951,"samples":438503},{"name":"Using brackets {}","opsSec":926055.0921870106,"samples":463029},{"name":"Using '' + ","opsSec":928161.4616663522,"samples":464081},{"name":"Using date.toString()","opsSec":1008634.0739023987,"samples":504348}]}-->
