## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,515,129|1757713|
|Using delete property (proto: null)|15,286,691|7643363|
|Using delete property (cached proto: null)|3,443,933|1722128|
|Using undefined assignment|73,379,776|36693705|
|Using undefined assignment (proto: null)|16,058,402|8029740|
|Using undefined property (cached proto: null)|73,280,777|36640390|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:57:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using delete property","opsSec":3515129.365263124,"samples":1757713},{"name":"Using delete property (proto: null)","opsSec":15286691.635517204,"samples":7643363},{"name":"Using delete property (cached proto: null)","opsSec":3443933.6615850106,"samples":1722128},{"name":"Using undefined assignment","opsSec":73379776.44861561,"samples":36693705},{"name":"Using undefined assignment (proto: null)","opsSec":16058402.995027931,"samples":8029740},{"name":"Using undefined property (cached proto: null)","opsSec":73280777.50845356,"samples":36640390}]}-->
