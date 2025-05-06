## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|100,161,618|50081051|
|~ (small)|101,728,949|50878510|
|Math.floor (long)|100,766,908|50415598|
|~ (long)|102,102,872|51051447|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:03:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":50081051,"opsSec":100161618.62002853},{"name":"~ (small)","samples":50878510,"opsSec":101728949.32064027},{"name":"Math.floor (long)","samples":50415598,"opsSec":100766908.52616467},{"name":"~ (long)","samples":51051447,"opsSec":102102872.35419106}]}-->
