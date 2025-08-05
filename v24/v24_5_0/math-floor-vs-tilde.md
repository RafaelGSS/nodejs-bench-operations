## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|91,260,555|45701911|
|~ (small)|90,014,195|45008031|
|Math.floor (long)|92,057,852|46028935|
|~ (long)|89,369,930|44693683|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:29:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Math.floor (small)","samples":45701911,"opsSec":91260555.52178746},{"name":"~ (small)","samples":45008031,"opsSec":90014195.1055935},{"name":"Math.floor (long)","samples":46028935,"opsSec":92057852.6931237},{"name":"~ (long)","samples":44693683,"opsSec":89369930.6414913}]}-->
