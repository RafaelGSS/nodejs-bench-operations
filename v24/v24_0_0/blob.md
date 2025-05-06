## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,624|2328|
|new Blob (1024)|591|296|
|text (128)|4,296|2149|
|text (1024)|534|268|
|arrayBuffer (128)|4,292|2149|
|arrayBuffer (1024)|532|268|
|slice (0, 64)|156,839|84523|
|slice (0, 512)|31,849|15925|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:13:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2328,"opsSec":4624.622831266685},{"name":"new Blob (1024)","samples":296,"opsSec":591.7022554250701},{"name":"text (128)","samples":2149,"opsSec":4296.404349795721},{"name":"text (1024)","samples":268,"opsSec":534.5783071677497},{"name":"arrayBuffer (128)","samples":2149,"opsSec":4292.015042544074},{"name":"arrayBuffer (1024)","samples":268,"opsSec":532.8879810846083},{"name":"slice (0, 64)","samples":84523,"opsSec":156839.8825048224},{"name":"slice (0, 512)","samples":15925,"opsSec":31849.895022746005}]}-->
