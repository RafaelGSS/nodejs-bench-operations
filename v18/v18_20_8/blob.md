## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,906|1994|
|new Blob (1024)|527|264|
|text (128)|44,149|22088|
|text (1024)|29,994|14998|
|arrayBuffer (128)|47,559|23806|
|arrayBuffer (1024)|30,219|15110|
|slice (0, 64)|77,131|38774|
|slice (0, 512)|41,618|20849|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:14:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":1994,"opsSec":3906.9962008831358},{"name":"new Blob (1024)","samples":264,"opsSec":527.7672725768808},{"name":"text (128)","samples":22088,"opsSec":44149.11689633595},{"name":"text (1024)","samples":14998,"opsSec":29994.6281056997},{"name":"arrayBuffer (128)","samples":23806,"opsSec":47559.02808868843},{"name":"arrayBuffer (1024)","samples":15110,"opsSec":30219.453874029587},{"name":"slice (0, 64)","samples":38774,"opsSec":77131.42443779942},{"name":"slice (0, 512)","samples":20849,"opsSec":41618.087944032195}]}-->
