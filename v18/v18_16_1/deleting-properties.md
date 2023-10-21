## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,995,536|93|
|Using delete property (proto: null)|10,048,187|91|
|Using delete property (cached proto: null)|1,974,970|93|
|Using undefined assignment|597,316,752|92|
|Using undefined assignment (proto: null)|11,916,324|94|
|Using undefined property (cached proto: null)|601,882,763|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":1995535.5071161715,"samples":7},{"name":"Using delete property (proto: null)","opsSec":10048187.162919452,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":1974970.4867711435,"samples":5},{"name":"Using undefined assignment","opsSec":597316752.4188766,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":11916324.381241327,"samples":8},{"name":"Using undefined property (cached proto: null)","opsSec":601882763.0746459,"samples":7}]}-->
