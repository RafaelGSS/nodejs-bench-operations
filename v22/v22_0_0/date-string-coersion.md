## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,040,296|520149|
|Using brackets {}|1,067,494|533748|
|Using '' + |1,061,747|530874|
|Using date.toString()|1,170,445|585223|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:18:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1040296.3459289043,"samples":520149},{"name":"Using brackets {}","opsSec":1067494.704061443,"samples":533748},{"name":"Using '' + ","opsSec":1061747.6390056487,"samples":530874},{"name":"Using date.toString()","opsSec":1170445.5856636467,"samples":585223}]}-->
