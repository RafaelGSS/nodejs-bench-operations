## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,125,535|93|
|Using brackets {}|1,142,262|97|
|Using '' + |1,148,048|98|
|Using date.toString()|1,258,973|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:46:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1125535.047875276,"samples":5},{"name":"Using brackets {}","opsSec":1142261.5320490182,"samples":5},{"name":"Using '' + ","opsSec":1148047.6659132212,"samples":7},{"name":"Using date.toString()","opsSec":1258972.5387106978,"samples":5}]}-->
