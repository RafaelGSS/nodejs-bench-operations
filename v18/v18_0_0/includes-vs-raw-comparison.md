## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|67,911,710|33988398|
|using Array.includes (first item)|82,883,214|41441736|
|Using raw comparison|101,870,551|50961795|
|Using raw comparison (first item)|90,232,181|45116102|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:48:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":33988398,"opsSec":67911710.91032119},{"name":"using Array.includes (first item)","samples":41441736,"opsSec":82883214.06743783},{"name":"Using raw comparison","samples":50961795,"opsSec":101870551.91211139},{"name":"Using raw comparison (first item)","samples":45116102,"opsSec":90232181.26149033}]}-->
