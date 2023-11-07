## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,476,514|97|
|Using delete property (proto: null)|21,903,859|96|
|Using delete property (cached proto: null)|3,515,428|98|
|Using undefined assignment|847,083,193|97|
|Using undefined assignment (proto: null)|25,040,174|95|
|Using undefined property (cached proto: null)|844,823,110|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:33:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":3476513.6280086054,"samples":5},{"name":"Using delete property (proto: null)","opsSec":21903859.26242696,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3515428.05424562,"samples":7},{"name":"Using undefined assignment","opsSec":847083192.5919515,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":25040174.433300395,"samples":7},{"name":"Using undefined property (cached proto: null)","opsSec":844823110.4042964,"samples":8}]}-->
