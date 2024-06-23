## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,023,948|511975|
|Using brackets {}|1,036,387|518194|
|Using '' + |1,049,967|524984|
|Using date.toString()|1,139,448|569725|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:16:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1023948.7184288995,"samples":511975},{"name":"Using brackets {}","opsSec":1036387.5271797602,"samples":518194},{"name":"Using '' + ","opsSec":1049967.3412941224,"samples":524984},{"name":"Using date.toString()","opsSec":1139448.192836793,"samples":569725}]}-->
