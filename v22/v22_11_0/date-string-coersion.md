## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,034,940|517474|
|Using brackets {}|1,054,166|527084|
|Using '' + |1,053,103|526552|
|Using date.toString()|1,155,629|577815|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:34:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":1034940.1178960621,"samples":517474},{"name":"Using brackets {}","opsSec":1054166.3597171444,"samples":527084},{"name":"Using '' + ","opsSec":1053103.12803061,"samples":526552},{"name":"Using date.toString()","opsSec":1155629.2234171617,"samples":577815}]}-->
