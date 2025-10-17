## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|94,523,634|47262285|
|Using backtick (`)|91,247,403|45646089|
|Using array.join|9,718,659|4866050|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:14:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using + sign","samples":47262285,"opsSec":94523634.02697587},{"name":"Using backtick (`)","samples":45646089,"opsSec":91247403.99382909},{"name":"Using array.join","samples":4866050,"opsSec":9718659.579734206}]}-->
