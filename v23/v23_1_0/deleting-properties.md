## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,450,499|1725404|
|Using delete property (proto: null)|16,675,412|8338556|
|Using delete property (cached proto: null)|3,422,439|1712143|
|Using undefined assignment|72,207,704|36103861|
|Using undefined assignment (proto: null)|17,952,841|8979339|
|Using undefined property (cached proto: null)|72,226,249|36119396|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:41:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3450499.17342298,"samples":1725404},{"name":"Using delete property (proto: null)","opsSec":16675412.975522747,"samples":8338556},{"name":"Using delete property (cached proto: null)","opsSec":3422439.4433329864,"samples":1712143},{"name":"Using undefined assignment","opsSec":72207704.23690477,"samples":36103861},{"name":"Using undefined assignment (proto: null)","opsSec":17952841.351748135,"samples":8979339},{"name":"Using undefined property (cached proto: null)","opsSec":72226249.33399315,"samples":36119396}]}-->
