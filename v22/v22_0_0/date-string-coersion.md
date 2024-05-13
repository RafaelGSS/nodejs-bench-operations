## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,055,964|527983|
|Using brackets {}|1,058,512|529257|
|Using '' + |1,058,409|529205|
|Using date.toString()|1,158,039|579021|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:11:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1055964.3400239656,"samples":527983},{"name":"Using brackets {}","opsSec":1058512.8102318344,"samples":529257},{"name":"Using '' + ","opsSec":1058409.69517796,"samples":529205},{"name":"Using date.toString()","opsSec":1158039.9039479995,"samples":579021}]}-->
