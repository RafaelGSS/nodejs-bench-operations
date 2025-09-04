## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|97,104,624|48632267|
|~ (small)|98,634,765|49317451|
|Math.floor (long)|96,483,737|48291845|
|~ (long)|98,842,655|49426212|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:21:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":48632267,"opsSec":97104624.62888141},{"name":"~ (small)","samples":49317451,"opsSec":98634765.68675382},{"name":"Math.floor (long)","samples":48291845,"opsSec":96483737.67195874},{"name":"~ (long)","samples":49426212,"opsSec":98842655.18270299}]}-->
