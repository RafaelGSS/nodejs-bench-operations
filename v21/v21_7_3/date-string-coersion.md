## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,069,988|534995|
|Using brackets {}|1,102,168|551085|
|Using '' + |1,089,213|544607|
|Using date.toString()|1,204,734|602368|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:10:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1069988.99635027,"samples":534995},{"name":"Using brackets {}","opsSec":1102168.767775294,"samples":551085},{"name":"Using '' + ","opsSec":1089213.729875017,"samples":544607},{"name":"Using date.toString()","opsSec":1204734.4868536603,"samples":602368}]}-->
