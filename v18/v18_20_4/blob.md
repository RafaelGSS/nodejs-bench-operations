## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,573|1800|
|new Blob (1024)|514|264|
|text (128)|45,501|22751|
|text (1024)|30,782|15392|
|arrayBuffer (128)|46,226|23114|
|arrayBuffer (1024)|28,562|14282|
|slice (0, 64)|81,176|40589|
|slice (0, 512)|48,351|24176|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:11:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":3573.7993334709627,"samples":1800},{"name":"new Blob (1024)","opsSec":514.2275094117886,"samples":264},{"name":"text (128)","opsSec":45501.66428927929,"samples":22751},{"name":"text (1024)","opsSec":30782.96433767337,"samples":15392},{"name":"arrayBuffer (128)","opsSec":46226.26411324473,"samples":23114},{"name":"arrayBuffer (1024)","opsSec":28562.17156467963,"samples":14282},{"name":"slice (0, 64)","opsSec":81176.51933782038,"samples":40589},{"name":"slice (0, 512)","opsSec":48351.263706145546,"samples":24176}]}-->
