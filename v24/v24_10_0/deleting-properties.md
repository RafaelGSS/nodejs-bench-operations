## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,163,261|2081633|
|Using delete property (proto: null)|17,275,468|8640122|
|Using delete property (cached proto: null)|4,216,790|2108511|
|Using undefined assignment|78,939,068|39952642|
|Using undefined assignment (proto: null)|19,229,821|9619030|
|Using undefined property (cached proto: null)|76,532,980|38269336|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:31:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2081633,"opsSec":4163261.1789435553},{"name":"Using delete property (proto: null)","samples":8640122,"opsSec":17275468.024110053},{"name":"Using delete property (cached proto: null)","samples":2108511,"opsSec":4216790.590965949},{"name":"Using undefined assignment","samples":39952642,"opsSec":78939068.07016172},{"name":"Using undefined assignment (proto: null)","samples":9619030,"opsSec":19229821.944279067},{"name":"Using undefined property (cached proto: null)","samples":38269336,"opsSec":76532980.54836854}]}-->
