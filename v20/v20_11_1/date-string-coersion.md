## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,061,119|92|
|Using brackets {}|1,107,039|97|
|Using '' + |1,103,749|97|
|Using date.toString()|1,191,276|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:42:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1061119.100879154,"samples":4},{"name":"Using brackets {}","opsSec":1107038.764976402,"samples":6},{"name":"Using '' + ","opsSec":1103748.9826495608,"samples":6},{"name":"Using date.toString()","opsSec":1191276.129768901,"samples":4}]}-->
