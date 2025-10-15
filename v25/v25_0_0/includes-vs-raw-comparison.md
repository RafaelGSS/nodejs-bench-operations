## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|68,960,181|34480097|
|using Array.includes (first item)|78,306,012|39374881|
|Using raw comparison|97,704,766|48852390|
|Using raw comparison (first item)|90,634,373|45317193|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:40:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":34480097,"opsSec":68960181.31132665},{"name":"using Array.includes (first item)","samples":39374881,"opsSec":78306012.16545199},{"name":"Using raw comparison","samples":48852390,"opsSec":97704766.90756124},{"name":"Using raw comparison (first item)","samples":45317193,"opsSec":90634373.67372519}]}-->
