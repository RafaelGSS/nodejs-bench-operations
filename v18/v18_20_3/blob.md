## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,470|2245|
|new Blob (1024)|557|279|
|text (128)|47,151|23576|
|text (1024)|30,692|15357|
|arrayBuffer (128)|48,768|24404|
|arrayBuffer (1024)|30,808|15405|
|slice (0, 64)|77,970|38986|
|slice (0, 512)|30,456|15229|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:01:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4470.088206647722,"samples":2245},{"name":"new Blob (1024)","opsSec":557.5383849790798,"samples":279},{"name":"text (128)","opsSec":47151.50764395718,"samples":23576},{"name":"text (1024)","opsSec":30692.227854326975,"samples":15357},{"name":"arrayBuffer (128)","opsSec":48768.29909322058,"samples":24404},{"name":"arrayBuffer (1024)","opsSec":30808.325813958614,"samples":15405},{"name":"slice (0, 64)","opsSec":77970.65204336747,"samples":38986},{"name":"slice (0, 512)","opsSec":30456.330201240387,"samples":15229}]}-->
