## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,042,532|521267|
|Using brackets {}|1,060,920|530461|
|Using '' + |1,047,284|523643|
|Using date.toString()|1,153,516|576759|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:15:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1042532.217334494,"samples":521267},{"name":"Using brackets {}","opsSec":1060920.1024211387,"samples":530461},{"name":"Using '' + ","opsSec":1047284.8978587296,"samples":523643},{"name":"Using date.toString()","opsSec":1153516.277826564,"samples":576759}]}-->
