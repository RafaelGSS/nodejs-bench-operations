## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,829|2419|
|new Blob (1024)|617|311|
|text (128)|4,446|2226|
|text (1024)|555|279|
|arrayBuffer (128)|4,439|2225|
|arrayBuffer (1024)|553|278|
|slice (0, 64)|171,457|85731|
|slice (0, 512)|27,054|13528|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:51:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Blob (128)","samples":2419,"opsSec":4829.293787793716},{"name":"new Blob (1024)","samples":311,"opsSec":617.0784868258495},{"name":"text (128)","samples":2226,"opsSec":4446.253466384892},{"name":"text (1024)","samples":279,"opsSec":555.0466588932549},{"name":"arrayBuffer (128)","samples":2225,"opsSec":4439.462456397794},{"name":"arrayBuffer (1024)","samples":278,"opsSec":553.5901622360489},{"name":"slice (0, 64)","samples":85731,"opsSec":171457.6003979738},{"name":"slice (0, 512)","samples":13528,"opsSec":27054.796981397423}]}-->
