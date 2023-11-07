## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|987,289|94|
|Using brackets {}|998,073|91|
|Using '' + |997,087|99|
|Using date.toString()|1,090,179|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:22:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":987288.8556955417,"samples":5},{"name":"Using brackets {}","opsSec":998073.1025152935,"samples":6},{"name":"Using '' + ","opsSec":997086.5908507367,"samples":5},{"name":"Using date.toString()","opsSec":1090178.6488422302,"samples":5}]}-->
