## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,071,588|535795|
|Using brackets {}|1,076,793|538397|
|Using '' + |1,076,586|538294|
|Using date.toString()|1,192,728|596365|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:18:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1071588.9198384392,"samples":535795},{"name":"Using brackets {}","opsSec":1076793.521903513,"samples":538397},{"name":"Using '' + ","opsSec":1076586.4992383795,"samples":538294},{"name":"Using date.toString()","opsSec":1192728.220449139,"samples":596365}]}-->
