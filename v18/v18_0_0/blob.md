## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,194|2598|
|new Blob (1024)|709|355|
|text (128)|35,261|17631|
|text (1024)|17,709|8855|
|arrayBuffer (128)|39,899|19951|
|arrayBuffer (1024)|17,694|8848|
|slice (0, 64)|95,989|48347|
|slice (0, 512)|26,414|13208|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:52:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5194.593293725939,"samples":2598},{"name":"new Blob (1024)","opsSec":709.1463154820458,"samples":355},{"name":"text (128)","opsSec":35261.26825862353,"samples":17631},{"name":"text (1024)","opsSec":17709.48383956053,"samples":8855},{"name":"arrayBuffer (128)","opsSec":39899.845728228465,"samples":19951},{"name":"arrayBuffer (1024)","opsSec":17694.73472047816,"samples":8848},{"name":"slice (0, 64)","opsSec":95989.30031102509,"samples":48347},{"name":"slice (0, 512)","opsSec":26414.036010540935,"samples":13208}]}-->
