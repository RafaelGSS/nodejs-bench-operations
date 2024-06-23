## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|17,104,624|8552313|
|Using dot notation|17,037,835|8518918|
|Using define property (writable)|3,361,117|1680559|
|Using define property initialized (writable)|4,114,837|2057419|
|Using define property (getter)|2,008,810|1004406|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:37:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":17104624.08469563,"samples":8552313},{"name":"Using dot notation","opsSec":17037835.38589392,"samples":8518918},{"name":"Using define property (writable)","opsSec":3361117.5563428975,"samples":1680559},{"name":"Using define property initialized (writable)","opsSec":4114837.473343738,"samples":2057419},{"name":"Using define property (getter)","opsSec":2008810.8067767632,"samples":1004406}]}-->
