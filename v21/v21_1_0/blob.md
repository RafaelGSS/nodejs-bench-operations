## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,423|80|
|new Blob (1024)|408|63|
|text (128)|3,909|84|
|text (1024)|483|89|
|arrayBuffer (128)|3,896|85|
|arrayBuffer (1024)|485|89|
|slice (0, 64)|93,474|45|
|slice (0, 512)|24,952|64|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":3423.051834570329,"samples":4},{"name":"new Blob (1024)","opsSec":407.77655332776595,"samples":2},{"name":"text (128)","opsSec":3908.741006548852,"samples":5},{"name":"text (1024)","opsSec":482.59950628990356,"samples":2},{"name":"arrayBuffer (128)","opsSec":3895.606790632378,"samples":4},{"name":"arrayBuffer (1024)","opsSec":484.5056376571351,"samples":2},{"name":"slice (0, 64)","opsSec":93473.79792372797,"samples":4},{"name":"slice (0, 512)","opsSec":24951.528988719958,"samples":4}]}-->
