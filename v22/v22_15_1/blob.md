## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,555|2278|
|new Blob (1024)|597|304|
|text (128)|4,373|2187|
|text (1024)|548|275|
|arrayBuffer (128)|4,396|2200|
|arrayBuffer (1024)|551|277|
|slice (0, 64)|149,529|82129|
|slice (0, 512)|19,938|15677|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:50:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Blob (128)","samples":2278,"opsSec":4555.741908109421},{"name":"new Blob (1024)","samples":304,"opsSec":597.0028106244263},{"name":"text (128)","samples":2187,"opsSec":4373.2875914513525},{"name":"text (1024)","samples":275,"opsSec":548.7530771628121},{"name":"arrayBuffer (128)","samples":2200,"opsSec":4396.816898025772},{"name":"arrayBuffer (1024)","samples":277,"opsSec":551.9109277289755},{"name":"slice (0, 64)","samples":82129,"opsSec":149529.1265374844},{"name":"slice (0, 512)","samples":15677,"opsSec":19938.523187837935}]}-->
