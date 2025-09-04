## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,686,479|3843241|
|Adding property in the object creation - small object|7,715,122|3857635|
|Adding property after the function creation - small class|242,546|122453|
|Adding property in the function creation - small class|246,484|123683|
|Adding property after the class creation - small class|209,053|104544|
|Adding property in the class creation - small class|206,221|106957|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:47:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3843241,"opsSec":7686479.217494523},{"name":"Adding property in the object creation - small object","samples":3857635,"opsSec":7715122.594867702},{"name":"Adding property after the function creation - small class","samples":122453,"opsSec":242546.02379285122},{"name":"Adding property in the function creation - small class","samples":123683,"opsSec":246484.25434178568},{"name":"Adding property after the class creation - small class","samples":104544,"opsSec":209053.22483226203},{"name":"Adding property in the class creation - small class","samples":106957,"opsSec":206221.22449002412}]}-->
