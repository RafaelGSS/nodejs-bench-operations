## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,051,752|525877|
|Using brackets {}|1,044,768|522387|
|Using '' + |1,080,224|540113|
|Using date.toString()|1,193,926|596964|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:11:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1051752.6474461316,"samples":525877},{"name":"Using brackets {}","opsSec":1044768.4272054697,"samples":522387},{"name":"Using '' + ","opsSec":1080224.6821259225,"samples":540113},{"name":"Using date.toString()","opsSec":1193926.9684470932,"samples":596964}]}-->
