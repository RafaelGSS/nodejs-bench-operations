## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,497,852|6249747|
|Date.now()|19,815,226|9907615|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:30:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().getTime()","samples":6249747,"opsSec":12497852.232139377},{"name":"Date.now()","samples":9907615,"opsSec":19815226.27473746}]}-->
