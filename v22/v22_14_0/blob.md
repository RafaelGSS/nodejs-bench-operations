## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,395|2211|
|new Blob (1024)|559|280|
|text (128)|4,228|2118|
|text (1024)|529|265|
|arrayBuffer (128)|4,208|2105|
|arrayBuffer (1024)|527|265|
|slice (0, 64)|138,269|81553|
|slice (0, 512)|31,705|15878|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:16:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2211,"opsSec":4395.030484366768},{"name":"new Blob (1024)","samples":280,"opsSec":559.2843453445406},{"name":"text (128)","samples":2118,"opsSec":4228.216656496555},{"name":"text (1024)","samples":265,"opsSec":529.4767900971904},{"name":"arrayBuffer (128)","samples":2105,"opsSec":4208.331379774594},{"name":"arrayBuffer (1024)","samples":265,"opsSec":527.1559399341494},{"name":"slice (0, 64)","samples":81553,"opsSec":138269.32939670252},{"name":"slice (0, 512)","samples":15878,"opsSec":31705.665797086494}]}-->
