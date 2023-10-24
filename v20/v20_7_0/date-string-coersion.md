## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|697,050|96|
|Using brackets {}|720,087|95|
|Using '' + |715,500|97|
|Using date.toString()|777,075|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":697050.3393435635,"samples":4},{"name":"Using brackets {}","opsSec":720087.3448230372,"samples":3},{"name":"Using '' + ","opsSec":715499.9042007573,"samples":6},{"name":"Using date.toString()","opsSec":777075.3174471415,"samples":7}]}-->
