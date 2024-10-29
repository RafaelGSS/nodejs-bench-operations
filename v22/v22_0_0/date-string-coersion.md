## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|901,593|450797|
|Using brackets {}|907,142|453572|
|Using '' + |907,066|453539|
|Using date.toString()|1,006,926|503474|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:34:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":901593.5401872945,"samples":450797},{"name":"Using brackets {}","opsSec":907142.7644715549,"samples":453572},{"name":"Using '' + ","opsSec":907066.3460115865,"samples":453539},{"name":"Using date.toString()","opsSec":1006926.8263426957,"samples":503474}]}-->
