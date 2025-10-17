## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|35,240,070|17626545|
|Object.create({})|2,043,201|1023539|
|new Function with empty prototype|100,323,710|50212587|
|Empty class|78,389,899|39199502|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:30:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Object.create(null)","samples":17626545,"opsSec":35240070.13320844},{"name":"Object.create({})","samples":1023539,"opsSec":2043201.221828897},{"name":"new Function with empty prototype","samples":50212587,"opsSec":100323710.61203542},{"name":"Empty class","samples":39199502,"opsSec":78389899.01322961}]}-->
