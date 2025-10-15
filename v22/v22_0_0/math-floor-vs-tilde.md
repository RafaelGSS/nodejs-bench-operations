## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|91,821,913|45910970|
|~ (small)|91,429,647|45714876|
|Math.floor (long)|91,840,868|45928489|
|~ (long)|92,001,741|46011083|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:50:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":45910970,"opsSec":91821913.37164512},{"name":"~ (small)","samples":45714876,"opsSec":91429647.22162428},{"name":"Math.floor (long)","samples":45928489,"opsSec":91840868.56060925},{"name":"~ (long)","samples":46011083,"opsSec":92001741.79732448}]}-->
