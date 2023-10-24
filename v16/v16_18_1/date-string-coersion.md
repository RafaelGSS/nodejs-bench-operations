## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|546,155|91|
|Using brackets {}|576,990|92|
|Using '' + |578,107|92|
|Using date.toString()|622,211|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":546155.2684204649,"samples":3},{"name":"Using brackets {}","opsSec":576989.8518640244,"samples":4},{"name":"Using '' + ","opsSec":578107.3218892269,"samples":5},{"name":"Using date.toString()","opsSec":622211.0685042365,"samples":5}]}-->
