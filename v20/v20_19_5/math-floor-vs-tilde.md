## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|99,299,250|49698868|
|~ (small)|101,898,955|50949483|
|Math.floor (long)|102,297,184|51148594|
|~ (long)|101,941,405|50970705|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:29:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Math.floor (small)","samples":49698868,"opsSec":99299250.80445364},{"name":"~ (small)","samples":50949483,"opsSec":101898955.19871074},{"name":"Math.floor (long)","samples":51148594,"opsSec":102297184.112707},{"name":"~ (long)","samples":50970705,"opsSec":101941405.71846096}]}-->
