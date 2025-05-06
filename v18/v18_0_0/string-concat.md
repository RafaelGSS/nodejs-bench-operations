## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|106,811,992|53406010|
|Using backtick (`)|98,869,438|49446822|
|Using array.join|10,058,264|5029420|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:06:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using + sign","samples":53406010,"opsSec":106811992.22888203},{"name":"Using backtick (`)","samples":49446822,"opsSec":98869438.19092546},{"name":"Using array.join","samples":5029420,"opsSec":10058264.22472272}]}-->
