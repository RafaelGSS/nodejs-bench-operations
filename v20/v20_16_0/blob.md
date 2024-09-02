## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,400|2201|
|new Blob (1024)|506|257|
|text (128)|4,344|2173|
|text (1024)|544|273|
|arrayBuffer (128)|4,379|2190|
|arrayBuffer (1024)|545|273|
|slice (0, 64)|66,920|33461|
|slice (0, 512)|28,583|14292|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:37:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":4400.652370622016,"samples":2201},{"name":"new Blob (1024)","opsSec":506.825221001075,"samples":257},{"name":"text (128)","opsSec":4344.653782957618,"samples":2173},{"name":"text (1024)","opsSec":544.3196634262116,"samples":273},{"name":"arrayBuffer (128)","opsSec":4379.911254238047,"samples":2190},{"name":"arrayBuffer (1024)","opsSec":545.5854140085693,"samples":273},{"name":"slice (0, 64)","opsSec":66920.75995833614,"samples":33461},{"name":"slice (0, 512)","opsSec":28583.226080571625,"samples":14292}]}-->
