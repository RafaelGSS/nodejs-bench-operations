## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|991,508|495755|
|Using brackets {}|1,042,345|521173|
|Using '' + |1,047,688|523845|
|Using date.toString()|1,150,576|575289|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:07:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":991508.098919837,"samples":495755},{"name":"Using brackets {}","opsSec":1042345.7057587348,"samples":521173},{"name":"Using '' + ","opsSec":1047688.399356064,"samples":523845},{"name":"Using date.toString()","opsSec":1150576.9230239391,"samples":575289}]}-->
