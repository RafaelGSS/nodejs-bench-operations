## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|66,640,017|33425968|
|using Array.includes (first item)|79,531,609|39765815|
|Using raw comparison|96,821,797|48853203|
|Using raw comparison (first item)|90,276,439|45394851|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:39:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":33425968,"opsSec":66640017.94405714},{"name":"using Array.includes (first item)","samples":39765815,"opsSec":79531609.48084475},{"name":"Using raw comparison","samples":48853203,"opsSec":96821797.32794155},{"name":"Using raw comparison (first item)","samples":45394851,"opsSec":90276439.27665591}]}-->
