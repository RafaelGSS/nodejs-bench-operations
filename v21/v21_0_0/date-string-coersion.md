## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,084,539|542307|
|Using brackets {}|1,038,013|519007|
|Using '' + |1,034,085|517043|
|Using date.toString()|1,166,181|583151|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:33:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":1084539.0431685704,"samples":542307},{"name":"Using brackets {}","opsSec":1038013.7695609432,"samples":519007},{"name":"Using '' + ","opsSec":1034085.987590968,"samples":517043},{"name":"Using date.toString()","opsSec":1166181.146315445,"samples":583151}]}-->
