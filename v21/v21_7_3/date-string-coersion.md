## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,047,862|523932|
|Using brackets {}|1,088,890|544446|
|Using '' + |1,080,410|540206|
|Using date.toString()|1,197,806|598904|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:50:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1047862.5937683608,"samples":523932},{"name":"Using brackets {}","opsSec":1088890.34706448,"samples":544446},{"name":"Using '' + ","opsSec":1080410.070387922,"samples":540206},{"name":"Using date.toString()","opsSec":1197806.1314226761,"samples":598904}]}-->
