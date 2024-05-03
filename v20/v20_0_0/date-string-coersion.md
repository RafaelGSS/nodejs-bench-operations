## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,223,244|95|
|Using brackets {}|1,240,324|99|
|Using '' + |1,232,594|98|
|Using date.toString()|1,359,325|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:41:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1223243.8964557736,"samples":5},{"name":"Using brackets {}","opsSec":1240324.371809764,"samples":5},{"name":"Using '' + ","opsSec":1232593.7463212346,"samples":5},{"name":"Using date.toString()","opsSec":1359324.6609302068,"samples":6}]}-->
