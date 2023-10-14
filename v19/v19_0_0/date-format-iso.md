## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|964,315|94|
|fromUnixToISOString(new Date())|1,522,266|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:42:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"new Date().toISOString()","hz":964315.3863143025,"cycles":4,"stats":{"deviation":4.22612431228691e-8,"mean":0.0000010370051273599266,"moe":8.54347223384616e-9,"rme":0.8238601727646877,"sem":4.358914405023551e-9,"variance":1.786012670290251e-15}},{"name":"fromUnixToISOString(new Date())","hz":1522265.6988683222,"cycles":8,"stats":{"deviation":2.0127631088048143e-8,"mean":6.569155442071753e-7,"moe":4.005556555540883e-9,"rme":0.6097521349377032,"sem":2.0436513038473896e-9,"variance":4.0512153321656213e-16}}]}-->
