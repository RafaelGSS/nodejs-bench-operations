## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,042,227|521114|
|Using brackets {}|1,017,255|508628|
|Using '' + |1,015,380|507691|
|Using date.toString()|1,176,298|588150|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:17:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1042227.3371435436,"samples":521114},{"name":"Using brackets {}","opsSec":1017255.0417457377,"samples":508628},{"name":"Using '' + ","opsSec":1015380.4403754831,"samples":507691},{"name":"Using date.toString()","opsSec":1176298.1508589557,"samples":588150}]}-->
