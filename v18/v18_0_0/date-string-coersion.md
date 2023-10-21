## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|682,957|94|
|Using brackets {}|688,671|97|
|Using '' + |702,678|94|
|Using date.toString()|767,277|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":682956.7024031065,"samples":6},{"name":"Using brackets {}","opsSec":688671.2068254374,"samples":3},{"name":"Using '' + ","opsSec":702677.5330842447,"samples":5},{"name":"Using date.toString()","opsSec":767276.8000764627,"samples":7}]}-->
