## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,670,863|4835433|
|Date.now()|19,063,737|9688760|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:55:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":4835433,"opsSec":9670863.775701333},{"name":"Date.now()","samples":9688760,"opsSec":19063737.814769458}]}-->
