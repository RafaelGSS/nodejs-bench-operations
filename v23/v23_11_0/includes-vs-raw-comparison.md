## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|68,499,926|34250188|
|using Array.includes (first item)|77,655,840|38840423|
|Using raw comparison|92,597,342|46303887|
|Using raw comparison (first item)|92,602,721|46309875|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:51:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":34250188,"opsSec":68499926.22948438},{"name":"using Array.includes (first item)","samples":38840423,"opsSec":77655840.04294777},{"name":"Using raw comparison","samples":46303887,"opsSec":92597342.35379979},{"name":"Using raw comparison (first item)","samples":46309875,"opsSec":92602721.84109698}]}-->
