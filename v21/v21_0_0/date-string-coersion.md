## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,045,209|96|
|Using brackets {}|1,082,059|96|
|Using '' + |1,073,140|96|
|Using date.toString()|1,212,448|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:46:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1045208.9400810722,"samples":4},{"name":"Using brackets {}","opsSec":1082059.1883080392,"samples":4},{"name":"Using '' + ","opsSec":1073140.299435095,"samples":5},{"name":"Using date.toString()","opsSec":1212448.0526477466,"samples":6}]}-->
