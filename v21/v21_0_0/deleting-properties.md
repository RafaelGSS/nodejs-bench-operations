## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,838,829|94|
|Using delete property (proto: null)|13,312,919|91|
|Using delete property (cached proto: null)|2,892,861|96|
|Using undefined assignment|709,034,479|96|
|Using undefined assignment (proto: null)|15,542,557|96|
|Using undefined property (cached proto: null)|709,169,415|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2838829.2577523836,"samples":7},{"name":"Using delete property (proto: null)","opsSec":13312919.201534852,"samples":8},{"name":"Using delete property (cached proto: null)","opsSec":2892861.324600303,"samples":5},{"name":"Using undefined assignment","opsSec":709034478.8765527,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":15542557.197848547,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":709169414.9450946,"samples":7}]}-->
