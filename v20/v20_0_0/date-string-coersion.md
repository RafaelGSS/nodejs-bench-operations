## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,125,119|96|
|Using brackets {}|1,145,624|94|
|Using '' + |1,128,781|96|
|Using date.toString()|1,237,871|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:46:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1125119.4842223518,"samples":6},{"name":"Using brackets {}","opsSec":1145624.0209500382,"samples":9},{"name":"Using '' + ","opsSec":1128780.5583079788,"samples":4},{"name":"Using date.toString()","opsSec":1237871.1693344484,"samples":4}]}-->
