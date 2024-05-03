## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,189,582|93|
|Using brackets {}|1,214,416|99|
|Using '' + |1,208,706|99|
|Using date.toString()|1,328,592|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:36:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1189582.2178840952,"samples":6},{"name":"Using brackets {}","opsSec":1214416.4180768467,"samples":5},{"name":"Using '' + ","opsSec":1208706.4984898528,"samples":5},{"name":"Using date.toString()","opsSec":1328592.216855907,"samples":4}]}-->
