## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,583|2292|
|new Blob (1024)|547|279|
|text (128)|4,292|2150|
|text (1024)|536|269|
|arrayBuffer (128)|4,270|2140|
|arrayBuffer (1024)|529|266|
|slice (0, 64)|142,022|78939|
|slice (0, 512)|31,058|15531|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:15:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2292,"opsSec":4583.065485449124},{"name":"new Blob (1024)","samples":279,"opsSec":547.3134799063027},{"name":"text (128)","samples":2150,"opsSec":4292.662766166929},{"name":"text (1024)","samples":269,"opsSec":536.280203016945},{"name":"arrayBuffer (128)","samples":2140,"opsSec":4270.955789851763},{"name":"arrayBuffer (1024)","samples":266,"opsSec":529.8554535001055},{"name":"slice (0, 64)","samples":78939,"opsSec":142022.5029572459},{"name":"slice (0, 512)","samples":15531,"opsSec":31058.769950042737}]}-->
