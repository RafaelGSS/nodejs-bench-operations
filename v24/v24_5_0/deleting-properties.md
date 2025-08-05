## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,099,066|2049983|
|Using delete property (proto: null)|17,272,153|8636079|
|Using delete property (cached proto: null)|4,191,539|2096071|
|Using undefined assignment|76,958,486|38480804|
|Using undefined assignment (proto: null)|19,572,337|9786236|
|Using undefined property (cached proto: null)|76,397,643|38397925|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:25:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using delete property","samples":2049983,"opsSec":4099066.107423041},{"name":"Using delete property (proto: null)","samples":8636079,"opsSec":17272153.889227375},{"name":"Using delete property (cached proto: null)","samples":2096071,"opsSec":4191539.4494379857},{"name":"Using undefined assignment","samples":38480804,"opsSec":76958486.40987425},{"name":"Using undefined assignment (proto: null)","samples":9786236,"opsSec":19572337.733763147},{"name":"Using undefined property (cached proto: null)","samples":38397925,"opsSec":76397643.78366868}]}-->
