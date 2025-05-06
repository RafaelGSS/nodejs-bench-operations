## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|99,277,648|50178292|
|~ (small)|99,263,564|49633223|
|Math.floor (long)|101,142,058|50626787|
|~ (long)|101,149,160|50574588|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:03:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":50178292,"opsSec":99277648.41588691},{"name":"~ (small)","samples":49633223,"opsSec":99263564.77576882},{"name":"Math.floor (long)","samples":50626787,"opsSec":101142058.81163663},{"name":"~ (long)","samples":50574588,"opsSec":101149160.82762589}]}-->
