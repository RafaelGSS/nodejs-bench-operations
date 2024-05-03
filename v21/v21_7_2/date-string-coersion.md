## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,168,471|94|
|Using brackets {}|1,194,098|99|
|Using '' + |1,190,530|96|
|Using date.toString()|1,345,072|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:44:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1168471.0041188742,"samples":4},{"name":"Using brackets {}","opsSec":1194097.5332632565,"samples":4},{"name":"Using '' + ","opsSec":1190530.1209321728,"samples":5},{"name":"Using date.toString()","opsSec":1345071.6405601273,"samples":5}]}-->
