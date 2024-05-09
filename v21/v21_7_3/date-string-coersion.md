## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,056,221|528111|
|Using brackets {}|1,077,612|538807|
|Using '' + |1,076,848|538425|
|Using date.toString()|1,187,348|593675|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:16:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1056221.1486855405,"samples":528111},{"name":"Using brackets {}","opsSec":1077612.4503931345,"samples":538807},{"name":"Using '' + ","opsSec":1076848.1930490688,"samples":538425},{"name":"Using date.toString()","opsSec":1187348.0859950937,"samples":593675}]}-->
