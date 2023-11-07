## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,101,678|92|
|Using brackets {}|1,105,245|98|
|Using '' + |1,096,942|99|
|Using date.toString()|1,192,821|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:26:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":1101677.9465396937,"samples":4},{"name":"Using brackets {}","opsSec":1105244.835398792,"samples":4},{"name":"Using '' + ","opsSec":1096941.997497316,"samples":4},{"name":"Using date.toString()","opsSec":1192821.1375497205,"samples":4}]}-->
