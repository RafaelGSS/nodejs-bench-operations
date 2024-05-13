## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,029,792|514897|
|Using brackets {}|1,070,904|535453|
|Using '' + |1,076,575|538288|
|Using date.toString()|1,190,149|595075|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:49:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1029792.8486916213,"samples":514897},{"name":"Using brackets {}","opsSec":1070904.7855941006,"samples":535453},{"name":"Using '' + ","opsSec":1076575.1042890465,"samples":538288},{"name":"Using date.toString()","opsSec":1190149.840519507,"samples":595075}]}-->
