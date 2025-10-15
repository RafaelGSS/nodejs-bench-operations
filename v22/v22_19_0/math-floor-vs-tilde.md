## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|93,792,367|46901044|
|~ (small)|98,423,274|49256723|
|Math.floor (long)|97,918,185|48959096|
|~ (long)|98,838,175|49419097|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:52:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":46901044,"opsSec":93792367.17148161},{"name":"~ (small)","samples":49256723,"opsSec":98423274.92613678},{"name":"Math.floor (long)","samples":48959096,"opsSec":97918185.73323612},{"name":"~ (long)","samples":49419097,"opsSec":98838175.22074671}]}-->
