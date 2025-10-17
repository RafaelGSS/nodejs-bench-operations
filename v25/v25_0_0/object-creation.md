## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|35,012,813|17508449|
|Object.create({})|2,157,385|1080278|
|new Function with empty prototype|96,108,480|48058761|
|Empty class|78,684,038|39345734|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:30:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Object.create(null)","samples":17508449,"opsSec":35012813.12511832},{"name":"Object.create({})","samples":1080278,"opsSec":2157385.519185318},{"name":"new Function with empty prototype","samples":48058761,"opsSec":96108480.11419086},{"name":"Empty class","samples":39345734,"opsSec":78684038.33836393}]}-->
