## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,632,094|1816414|
|Using delete property (proto: null)|16,524,702|8262354|
|Using delete property (cached proto: null)|3,682,737|1841372|
|Using undefined assignment|83,310,958|41658614|
|Using undefined assignment (proto: null)|16,808,915|8404460|
|Using undefined property (cached proto: null)|82,693,101|41351191|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:42:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":1816414,"opsSec":3632094.411363359},{"name":"Using delete property (proto: null)","samples":8262354,"opsSec":16524702.183304831},{"name":"Using delete property (cached proto: null)","samples":1841372,"opsSec":3682737.5036510434},{"name":"Using undefined assignment","samples":41658614,"opsSec":83310958.51712775},{"name":"Using undefined assignment (proto: null)","samples":8404460,"opsSec":16808915.663299758},{"name":"Using undefined property (cached proto: null)","samples":41351191,"opsSec":82693101.51860276}]}-->
