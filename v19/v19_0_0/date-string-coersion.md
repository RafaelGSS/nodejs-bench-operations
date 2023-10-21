## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|696,662|97|
|Using brackets {}|699,431|97|
|Using '' + |700,539|94|
|Using date.toString()|769,606|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":696661.7026781947,"samples":3},{"name":"Using brackets {}","opsSec":699431.3637782852,"samples":3},{"name":"Using '' + ","opsSec":700539.204687898,"samples":5},{"name":"Using date.toString()","opsSec":769606.1142918867,"samples":7}]}-->
