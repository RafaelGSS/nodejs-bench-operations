## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,095,115|90|
|Using brackets {}|1,110,409|96|
|Using '' + |1,109,050|94|
|Using date.toString()|1,205,522|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:46:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1095114.6075806143,"samples":4},{"name":"Using brackets {}","opsSec":1110408.7750155085,"samples":7},{"name":"Using '' + ","opsSec":1109050.1350623264,"samples":4},{"name":"Using date.toString()","opsSec":1205521.5564931573,"samples":4}]}-->
