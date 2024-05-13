## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,059,646|529824|
|Using brackets {}|1,087,043|543522|
|Using '' + |1,084,763|542382|
|Using date.toString()|1,189,258|594630|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:30:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1059646.5292106995,"samples":529824},{"name":"Using brackets {}","opsSec":1087043.0455763252,"samples":543522},{"name":"Using '' + ","opsSec":1084763.9761355445,"samples":542382},{"name":"Using date.toString()","opsSec":1189258.465856263,"samples":594630}]}-->
