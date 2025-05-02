## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|96,417,938|48230630|
|Using dot notation|69,300,183|34687587|
|Using define property (writable)|4,924,569|2463129|
|Using define property initialized (writable)|7,214,009|3607059|
|Using define property (getter)|2,458,091|1229049|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri May 02 2025 20:15:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0-rc.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597869873046875},"benchmarks":[{"name":"Directly in the object","samples":48230630,"opsSec":96417938.64882156},{"name":"Using dot notation","samples":34687587,"opsSec":69300183.02454585},{"name":"Using define property (writable)","samples":2463129,"opsSec":4924569.955910513},{"name":"Using define property initialized (writable)","samples":3607059,"opsSec":7214009.890847775},{"name":"Using define property (getter)","samples":1229049,"opsSec":2458091.073099356}]}-->
