## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,202,861|2101432|
|Using delete property (proto: null)|18,339,638|9169823|
|Using delete property (cached proto: null)|4,217,433|2108718|
|Using undefined assignment|75,957,281|37985310|
|Using undefined assignment (proto: null)|19,726,543|9865388|
|Using undefined property (cached proto: null)|78,102,435|39052011|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:32:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2101432,"opsSec":4202861.116837274},{"name":"Using delete property (proto: null)","samples":9169823,"opsSec":18339638.370710436},{"name":"Using delete property (cached proto: null)","samples":2108718,"opsSec":4217433.064666587},{"name":"Using undefined assignment","samples":37985310,"opsSec":75957281.90129814},{"name":"Using undefined assignment (proto: null)","samples":9865388,"opsSec":19726543.67005559},{"name":"Using undefined property (cached proto: null)","samples":39052011,"opsSec":78102435.89573182}]}-->
