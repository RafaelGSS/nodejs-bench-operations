## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|854,974|427488|
|Using brackets {}|890,027|445014|
|Using '' + |865,241|432621|
|Using date.toString()|956,722|478362|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:48:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":854974.2524323583,"samples":427488},{"name":"Using brackets {}","opsSec":890027.1099733285,"samples":445014},{"name":"Using '' + ","opsSec":865241.441053725,"samples":432621},{"name":"Using date.toString()","opsSec":956722.1477864085,"samples":478362}]}-->
