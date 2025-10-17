## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,206,431|2103219|
|Using delete property (proto: null)|16,681,289|8340713|
|Using delete property (cached proto: null)|4,211,724|2105864|
|Using undefined assignment|75,022,854|37524001|
|Using undefined assignment (proto: null)|19,253,823|9627100|
|Using undefined property (cached proto: null)|79,291,638|39645827|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:12:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using delete property","samples":2103219,"opsSec":4206431.109865841},{"name":"Using delete property (proto: null)","samples":8340713,"opsSec":16681289.246790756},{"name":"Using delete property (cached proto: null)","samples":2105864,"opsSec":4211724.487421778},{"name":"Using undefined assignment","samples":37524001,"opsSec":75022854.03923464},{"name":"Using undefined assignment (proto: null)","samples":9627100,"opsSec":19253823.97281781},{"name":"Using undefined property (cached proto: null)","samples":39645827,"opsSec":79291638.14167237}]}-->
