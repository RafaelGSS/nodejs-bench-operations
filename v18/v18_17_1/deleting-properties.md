## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,385,876|97|
|Using delete property (proto: null)|22,877,829|97|
|Using delete property (cached proto: null)|3,352,440|92|
|Using undefined assignment|845,357,927|99|
|Using undefined assignment (proto: null)|25,757,557|95|
|Using undefined property (cached proto: null)|844,588,037|101|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:34:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":3385875.5259383176,"samples":6},{"name":"Using delete property (proto: null)","opsSec":22877829.12316185,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3352440.455920644,"samples":7},{"name":"Using undefined assignment","opsSec":845357926.5966681,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":25757557.107978426,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":844588036.6691691,"samples":9}]}-->
