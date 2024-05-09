## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,060,519|530260|
|Using brackets {}|1,078,786|539394|
|Using '' + |1,066,287|533144|
|Using date.toString()|1,156,164|578083|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:14:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1060519.9281912663,"samples":530260},{"name":"Using brackets {}","opsSec":1078786.6615167174,"samples":539394},{"name":"Using '' + ","opsSec":1066287.0309033007,"samples":533144},{"name":"Using date.toString()","opsSec":1156164.1840110673,"samples":578083}]}-->
