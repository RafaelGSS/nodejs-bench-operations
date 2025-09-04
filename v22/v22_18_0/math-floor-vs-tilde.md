## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|89,028,223|44514134|
|~ (small)|93,117,131|46558573|
|Math.floor (long)|98,720,402|49360222|
|~ (long)|98,653,285|49326650|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:22:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":44514134,"opsSec":89028223.84200098},{"name":"~ (small)","samples":46558573,"opsSec":93117131.84619597},{"name":"Math.floor (long)","samples":49360222,"opsSec":98720402.53743094},{"name":"~ (long)","samples":49326650,"opsSec":98653285.00470069}]}-->
