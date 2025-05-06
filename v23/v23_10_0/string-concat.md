## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|88,752,834|44376429|
|Using backtick (`)|81,274,681|40637546|
|Using array.join|9,852,921|4926961|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:06:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using + sign","samples":44376429,"opsSec":88752834.92426293},{"name":"Using backtick (`)","samples":40637546,"opsSec":81274681.07521248},{"name":"Using array.join","samples":4926961,"opsSec":9852921.967831952}]}-->
