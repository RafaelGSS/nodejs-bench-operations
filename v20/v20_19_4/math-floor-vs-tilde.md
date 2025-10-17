## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|94,565,959|47282982|
|~ (small)|101,645,716|50834255|
|Math.floor (long)|100,562,859|50322519|
|~ (long)|98,248,070|49124065|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:28:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Math.floor (small)","samples":47282982,"opsSec":94565959.83909775},{"name":"~ (small)","samples":50834255,"opsSec":101645716.15144446},{"name":"Math.floor (long)","samples":50322519,"opsSec":100562859.84106936},{"name":"~ (long)","samples":49124065,"opsSec":98248070.85466135}]}-->
