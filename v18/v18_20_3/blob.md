## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,309|2155|
|new Blob (1024)|525|263|
|text (128)|49,646|24824|
|text (1024)|28,841|14421|
|arrayBuffer (128)|48,497|24249|
|arrayBuffer (1024)|31,575|15788|
|slice (0, 64)|85,221|42611|
|slice (0, 512)|50,162|25082|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:37:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":4309.6165734077695,"samples":2155},{"name":"new Blob (1024)","opsSec":525.2689139189013,"samples":263},{"name":"text (128)","opsSec":49646.247485724656,"samples":24824},{"name":"text (1024)","opsSec":28841.199367943853,"samples":14421},{"name":"arrayBuffer (128)","opsSec":48497.42608214832,"samples":24249},{"name":"arrayBuffer (1024)","opsSec":31575.650332290967,"samples":15788},{"name":"slice (0, 64)","opsSec":85221.54116269681,"samples":42611},{"name":"slice (0, 512)","opsSec":50162.41637278998,"samples":25082}]}-->
