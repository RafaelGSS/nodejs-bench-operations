## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|105,682,967|52841499|
|~ (small)|103,630,178|51825372|
|Math.floor (long)|105,816,654|52908337|
|~ (long)|107,014,259|53507148|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:00:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":52841499,"opsSec":105682967.77467123},{"name":"~ (small)","samples":51825372,"opsSec":103630178.17662014},{"name":"Math.floor (long)","samples":52908337,"opsSec":105816654.95300211},{"name":"~ (long)","samples":53507148,"opsSec":107014259.40112327}]}-->
