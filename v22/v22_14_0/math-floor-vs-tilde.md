## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|93,797,586|46898801|
|~ (small)|92,996,611|46498326|
|Math.floor (long)|87,576,357|43798421|
|~ (long)|94,103,943|47055718|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:01:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":46898801,"opsSec":93797586.80479093},{"name":"~ (small)","samples":46498326,"opsSec":92996611.63947055},{"name":"Math.floor (long)","samples":43798421,"opsSec":87576357.01433079},{"name":"~ (long)","samples":47055718,"opsSec":94103943.444023}]}-->
