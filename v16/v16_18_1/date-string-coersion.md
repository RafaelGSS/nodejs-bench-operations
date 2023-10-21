## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|686,248|96|
|Using brackets {}|675,990|93|
|Using '' + |692,496|92|
|Using date.toString()|753,806|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":686248.1087398529,"samples":6},{"name":"Using brackets {}","opsSec":675990.4039609041,"samples":7},{"name":"Using '' + ","opsSec":692496.0479652649,"samples":4},{"name":"Using date.toString()","opsSec":753806.2773390913,"samples":4}]}-->
