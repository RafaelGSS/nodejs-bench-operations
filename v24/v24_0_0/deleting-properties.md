## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,155,040|2077524|
|Using delete property (proto: null)|16,952,091|8477355|
|Using delete property (cached proto: null)|4,069,387|2037306|
|Using undefined assignment|78,284,961|39152727|
|Using undefined assignment (proto: null)|19,042,275|9521141|
|Using undefined property (cached proto: null)|77,906,120|38954281|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:40:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":2077524,"opsSec":4155040.7619189927},{"name":"Using delete property (proto: null)","samples":8477355,"opsSec":16952091.95282299},{"name":"Using delete property (cached proto: null)","samples":2037306,"opsSec":4069387.3461413877},{"name":"Using undefined assignment","samples":39152727,"opsSec":78284961.50219749},{"name":"Using undefined assignment (proto: null)","samples":9521141,"opsSec":19042275.48754178},{"name":"Using undefined property (cached proto: null)","samples":38954281,"opsSec":77906120.7338007}]}-->
