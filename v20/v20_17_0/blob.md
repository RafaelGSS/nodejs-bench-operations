## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,468|2237|
|new Blob (1024)|556|280|
|text (128)|4,362|2183|
|text (1024)|571|287|
|arrayBuffer (128)|4,547|2274|
|arrayBuffer (1024)|571|286|
|slice (0, 64)|61,739|35522|
|slice (0, 512)|24,802|12404|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:46:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Blob (128)","opsSec":4468.439920207286,"samples":2237},{"name":"new Blob (1024)","opsSec":556.4489453780136,"samples":280},{"name":"text (128)","opsSec":4362.991010893445,"samples":2183},{"name":"text (1024)","opsSec":571.1255229584481,"samples":287},{"name":"arrayBuffer (128)","opsSec":4547.0232903031965,"samples":2274},{"name":"arrayBuffer (1024)","opsSec":571.217088715772,"samples":286},{"name":"slice (0, 64)","opsSec":61739.819671303856,"samples":35522},{"name":"slice (0, 512)","opsSec":24802.34685068702,"samples":12404}]}-->
