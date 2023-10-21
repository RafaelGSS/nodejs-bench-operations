## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,231,876|88|
|Using delete property (proto: null)|10,303,595|92|
|Using delete property (cached proto: null)|2,278,416|93|
|Using undefined assignment|591,367,410|92|
|Using undefined assignment (proto: null)|11,371,054|88|
|Using undefined property (cached proto: null)|602,018,130|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using delete property","opsSec":2231876.0182390357,"samples":8},{"name":"Using delete property (proto: null)","opsSec":10303595.472905442,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":2278416.0540333246,"samples":5},{"name":"Using undefined assignment","opsSec":591367410.0570949,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":11371054.378996667,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":602018130.1430405,"samples":8}]}-->
