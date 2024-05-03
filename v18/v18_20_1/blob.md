## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,730|92|
|new Blob (1024)|742|79|
|text (128)|38,086|68|
|text (1024)|25,276|78|
|arrayBuffer (128)|42,855|76|
|arrayBuffer (1024)|25,457|80|
|slice (0, 64)|95,881|81|
|slice (0, 512)|46,825|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:44:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5729.898676544437,"samples":5},{"name":"new Blob (1024)","opsSec":742.4077273862412,"samples":2},{"name":"text (128)","opsSec":38085.552240823345,"samples":5},{"name":"text (1024)","opsSec":25276.10925766244,"samples":5},{"name":"arrayBuffer (128)","opsSec":42855.069853772584,"samples":5},{"name":"arrayBuffer (1024)","opsSec":25457.269957829416,"samples":3},{"name":"slice (0, 64)","opsSec":95881.17814201184,"samples":4},{"name":"slice (0, 512)","opsSec":46825.3703275163,"samples":3}]}-->
