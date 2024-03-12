## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,017,069|93|
|Using delete property (proto: null)|20,074,567|98|
|Using delete property (cached proto: null)|4,101,282|96|
|Using undefined assignment|820,671,613|97|
|Using undefined assignment (proto: null)|23,337,966|97|
|Using undefined property (cached proto: null)|819,938,905|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:44:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using delete property","opsSec":4017068.5336900013,"samples":6},{"name":"Using delete property (proto: null)","opsSec":20074567.00449739,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":4101282.3198311976,"samples":4},{"name":"Using undefined assignment","opsSec":820671613.3719238,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":23337965.848891083,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":819938905.4579061,"samples":6}]}-->
