## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|226,700|55|
|[True conditional] Using constructor name|181,652|97|
|[True conditional] Check if property is valid then instanceof |181,547|96|
|[False conditional] Using instanceof only|849,567,770|97|
|[False conditional] Using constructor name|851,566,379|98|
|[False conditional] Check if property is valid then instanceof |852,709,631|101|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:42:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":226700.16896082222,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":181651.89485234243,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":181547.44082793288,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":849567770.0108414,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":851566378.519759,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":852709630.8648818,"samples":6}]}-->
