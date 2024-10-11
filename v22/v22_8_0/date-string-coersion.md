## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,081,344|540742|
|Using brackets {}|1,058,633|529318|
|Using '' + |1,066,394|533320|
|Using date.toString()|1,182,731|591366|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:16:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using String()","opsSec":1081344.1281370255,"samples":540742},{"name":"Using brackets {}","opsSec":1058633.9441328805,"samples":529318},{"name":"Using '' + ","opsSec":1066394.938177627,"samples":533320},{"name":"Using date.toString()","opsSec":1182731.2643411537,"samples":591366}]}-->
