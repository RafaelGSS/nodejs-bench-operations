## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,813,187|1406594|
|Using delete property (proto: null)|7,755,323|3877663|
|Using delete property (cached proto: null)|2,789,206|1394604|
|Using undefined assignment|13,747,244|6873624|
|Using undefined assignment (proto: null)|7,957,409|3978705|
|Using undefined property (cached proto: null)|14,157,305|7078653|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:56:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":2813187.0153850503,"samples":1406594},{"name":"Using delete property (proto: null)","opsSec":7755323.502758973,"samples":3877663},{"name":"Using delete property (cached proto: null)","opsSec":2789206.4491884923,"samples":1394604},{"name":"Using undefined assignment","opsSec":13747244.205712603,"samples":6873624},{"name":"Using undefined assignment (proto: null)","opsSec":7957409.57025811,"samples":3978705},{"name":"Using undefined property (cached proto: null)","opsSec":14157305.20704921,"samples":7078653}]}-->
