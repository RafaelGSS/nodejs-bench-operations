## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,043,728|521865|
|Using brackets {}|1,025,299|512650|
|Using '' + |1,046,030|523016|
|Using date.toString()|1,172,358|586180|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:18:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1043728.1421639698,"samples":521865},{"name":"Using brackets {}","opsSec":1025299.805193115,"samples":512650},{"name":"Using '' + ","opsSec":1046030.1171458381,"samples":523016},{"name":"Using date.toString()","opsSec":1172358.841709454,"samples":586180}]}-->
