## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,929|1965|
|new Blob (1024)|559|282|
|text (128)|45,917|22959|
|text (1024)|30,015|15021|
|arrayBuffer (128)|48,398|24200|
|arrayBuffer (1024)|29,094|14549|
|slice (0, 64)|76,741|38371|
|slice (0, 512)|39,400|19702|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:12:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":1965,"opsSec":3929.319174725234},{"name":"new Blob (1024)","samples":282,"opsSec":559.0874561851635},{"name":"text (128)","samples":22959,"opsSec":45917.604373920716},{"name":"text (1024)","samples":15021,"opsSec":30015.436398817918},{"name":"arrayBuffer (128)","samples":24200,"opsSec":48398.954388989376},{"name":"arrayBuffer (1024)","samples":14549,"opsSec":29094.78008068847},{"name":"slice (0, 64)","samples":38371,"opsSec":76741.80599671444},{"name":"slice (0, 512)","samples":19702,"opsSec":39400.779380293454}]}-->
