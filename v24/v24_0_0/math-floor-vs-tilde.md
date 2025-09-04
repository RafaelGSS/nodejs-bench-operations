## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|92,769,736|46393020|
|~ (small)|92,683,994|46342017|
|Math.floor (long)|92,620,630|46318761|
|~ (long)|93,105,743|46552882|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:24:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":46393020,"opsSec":92769736.46097489},{"name":"~ (small)","samples":46342017,"opsSec":92683994.33125041},{"name":"Math.floor (long)","samples":46318761,"opsSec":92620630.59035797},{"name":"~ (long)","samples":46552882,"opsSec":93105743.14431353}]}-->
