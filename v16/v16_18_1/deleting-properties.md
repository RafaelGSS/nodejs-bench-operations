## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,475,901|88|
|Using delete property (proto: null)|22,525,665|99|
|Using delete property (cached proto: null)|3,500,681|96|
|Using undefined assignment|848,995,355|100|
|Using undefined assignment (proto: null)|24,643,558|99|
|Using undefined property (cached proto: null)|846,622,655|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:31:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":3475901.0919661857,"samples":4},{"name":"Using delete property (proto: null)","opsSec":22525665.43815364,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3500680.670932923,"samples":5},{"name":"Using undefined assignment","opsSec":848995355.1993964,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":24643558.272555295,"samples":7},{"name":"Using undefined property (cached proto: null)","opsSec":846622655.0760931,"samples":8}]}-->
