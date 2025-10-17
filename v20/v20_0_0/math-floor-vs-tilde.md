## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|101,578,414|50789216|
|~ (small)|94,808,634|47404441|
|Math.floor (long)|101,423,012|50711514|
|~ (long)|101,123,161|50580715|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:29:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Math.floor (small)","samples":50789216,"opsSec":101578414.73166949},{"name":"~ (small)","samples":47404441,"opsSec":94808634.35984704},{"name":"Math.floor (long)","samples":50711514,"opsSec":101423012.5837021},{"name":"~ (long)","samples":50580715,"opsSec":101123161.35530934}]}-->
