## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,506,932|1753469|
|Using delete property (proto: null)|15,337,965|7668983|
|Using delete property (cached proto: null)|3,536,408|1768318|
|Using undefined assignment|75,574,456|37787237|
|Using undefined assignment (proto: null)|16,078,925|8040090|
|Using undefined property (cached proto: null)|72,745,600|36372831|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:16:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":3506932.816753297,"samples":1753469},{"name":"Using delete property (proto: null)","opsSec":15337965.202425808,"samples":7668983},{"name":"Using delete property (cached proto: null)","opsSec":3536408.2694530804,"samples":1768318},{"name":"Using undefined assignment","opsSec":75574456.4667261,"samples":37787237},{"name":"Using undefined assignment (proto: null)","opsSec":16078925.104211316,"samples":8040090},{"name":"Using undefined property (cached proto: null)","opsSec":72745600.31173094,"samples":36372831}]}-->
