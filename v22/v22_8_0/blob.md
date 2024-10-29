## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,803|2419|
|new Blob (1024)|553|281|
|text (128)|4,127|2066|
|text (1024)|526|264|
|arrayBuffer (128)|4,036|2026|
|arrayBuffer (1024)|505|253|
|slice (0, 64)|187,024|93521|
|slice (0, 512)|15,241|14621|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:05:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4803.085039589582,"samples":2419},{"name":"new Blob (1024)","opsSec":553.9198875128666,"samples":281},{"name":"text (128)","opsSec":4127.294496308526,"samples":2066},{"name":"text (1024)","opsSec":526.3406962176344,"samples":264},{"name":"arrayBuffer (128)","opsSec":4036.031586325839,"samples":2026},{"name":"arrayBuffer (1024)","opsSec":505.29930347706556,"samples":253},{"name":"slice (0, 64)","opsSec":187024.25588669852,"samples":93521},{"name":"slice (0, 512)","opsSec":15241.67210297772,"samples":14621}]}-->
