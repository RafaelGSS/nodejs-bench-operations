## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,685,816|1844428|
|Using delete property (proto: null)|17,441,395|8723702|
|Using delete property (cached proto: null)|3,727,724|1864483|
|Using undefined assignment|85,794,731|42900969|
|Using undefined assignment (proto: null)|18,323,951|9163327|
|Using undefined property (cached proto: null)|83,815,537|41930538|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:30:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1844428,"opsSec":3685816.60191373},{"name":"Using delete property (proto: null)","samples":8723702,"opsSec":17441395.857720517},{"name":"Using delete property (cached proto: null)","samples":1864483,"opsSec":3727724.8391039204},{"name":"Using undefined assignment","samples":42900969,"opsSec":85794731.07100058},{"name":"Using undefined assignment (proto: null)","samples":9163327,"opsSec":18323951.070625477},{"name":"Using undefined property (cached proto: null)","samples":41930538,"opsSec":83815537.00717112}]}-->
