## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|89,782,643|44895293|
|~ (small)|90,267,281|45217858|
|Math.floor (long)|88,367,555|44183921|
|~ (long)|90,132,634|45066323|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:01:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":44895293,"opsSec":89782643.82732704},{"name":"~ (small)","samples":45217858,"opsSec":90267281.58539118},{"name":"Math.floor (long)","samples":44183921,"opsSec":88367555.86585411},{"name":"~ (long)","samples":45066323,"opsSec":90132634.64328803}]}-->
