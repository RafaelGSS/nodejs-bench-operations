## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|933,794|466898|
|Using brackets {}|967,669|483835|
|Using '' + |946,368|473185|
|Using date.toString()|1,064,871|532436|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:45:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":933794.9579325503,"samples":466898},{"name":"Using brackets {}","opsSec":967669.2665781645,"samples":483835},{"name":"Using '' + ","opsSec":946368.6066219157,"samples":473185},{"name":"Using date.toString()","opsSec":1064871.8656441309,"samples":532436}]}-->
