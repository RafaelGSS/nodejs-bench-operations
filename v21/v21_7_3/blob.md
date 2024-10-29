## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,635|2318|
|new Blob (1024)|607|304|
|text (128)|4,895|2448|
|text (1024)|614|308|
|arrayBuffer (128)|4,877|2442|
|arrayBuffer (1024)|620|312|
|slice (0, 64)|161,535|80927|
|slice (0, 512)|31,776|15889|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:04:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4635.159645556261,"samples":2318},{"name":"new Blob (1024)","opsSec":607.2698939809443,"samples":304},{"name":"text (128)","opsSec":4895.894914511555,"samples":2448},{"name":"text (1024)","opsSec":614.3484642253799,"samples":308},{"name":"arrayBuffer (128)","opsSec":4877.695120553344,"samples":2442},{"name":"arrayBuffer (1024)","opsSec":620.7820211976168,"samples":312},{"name":"slice (0, 64)","opsSec":161535.74679466605,"samples":80927},{"name":"slice (0, 512)","opsSec":31776.305306085414,"samples":15889}]}-->
