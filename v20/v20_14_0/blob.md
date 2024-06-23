## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,433|2717|
|new Blob (1024)|724|363|
|text (128)|6,038|3020|
|text (1024)|772|387|
|arrayBuffer (128)|6,163|3082|
|arrayBuffer (1024)|757|379|
|slice (0, 64)|82,819|41410|
|slice (0, 512)|29,263|14632|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:54:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5433.579647411369,"samples":2717},{"name":"new Blob (1024)","opsSec":724.8833896266176,"samples":363},{"name":"text (128)","opsSec":6038.962530393164,"samples":3020},{"name":"text (1024)","opsSec":772.653135778614,"samples":387},{"name":"arrayBuffer (128)","opsSec":6163.944068371453,"samples":3082},{"name":"arrayBuffer (1024)","opsSec":757.0693104704236,"samples":379},{"name":"slice (0, 64)","opsSec":82819.22017422029,"samples":41410},{"name":"slice (0, 512)","opsSec":29263.76062243713,"samples":14632}]}-->
