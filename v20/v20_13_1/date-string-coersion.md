## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,044,430|522216|
|Using brackets {}|1,069,940|534971|
|Using '' + |1,065,282|532642|
|Using date.toString()|1,173,823|586912|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:09:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1044430.1638916855,"samples":522216},{"name":"Using brackets {}","opsSec":1069940.6390354638,"samples":534971},{"name":"Using '' + ","opsSec":1065282.836711234,"samples":532642},{"name":"Using date.toString()","opsSec":1173823.2863156497,"samples":586912}]}-->
