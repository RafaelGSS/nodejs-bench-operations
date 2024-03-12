## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,032,509|97|
|Using brackets {}|1,056,619|95|
|Using '' + |1,066,237|99|
|Using date.toString()|1,210,328|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:42:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1032508.5213166759,"samples":4},{"name":"Using brackets {}","opsSec":1056618.5041805392,"samples":5},{"name":"Using '' + ","opsSec":1066237.1579498989,"samples":4},{"name":"Using date.toString()","opsSec":1210327.8373718276,"samples":5}]}-->
