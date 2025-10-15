## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|74,058,357|37029186|
|using Array.includes (first item)|86,224,245|43124331|
|Using raw comparison|100,098,464|50049239|
|Using raw comparison (first item)|101,304,847|50652430|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:41:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":37029186,"opsSec":74058357.04021187},{"name":"using Array.includes (first item)","samples":43124331,"opsSec":86224245.01829572},{"name":"Using raw comparison","samples":50049239,"opsSec":100098464.38660885},{"name":"Using raw comparison (first item)","samples":50652430,"opsSec":101304847.43819891}]}-->
