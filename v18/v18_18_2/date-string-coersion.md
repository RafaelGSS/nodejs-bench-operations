## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|578,029|86|
|Using brackets {}|579,292|88|
|Using '' + |580,913|87|
|Using date.toString()|628,715|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:51:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":578029.362438797,"samples":5},{"name":"Using brackets {}","opsSec":579291.6135434817,"samples":3},{"name":"Using '' + ","opsSec":580913.4732213599,"samples":3},{"name":"Using date.toString()","opsSec":628714.8312066372,"samples":6}]}-->
