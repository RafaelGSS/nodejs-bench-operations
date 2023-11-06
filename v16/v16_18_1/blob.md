## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,127|82|
|new Blob (1024)|527|69|
|text (128)|41,016|84|
|text (1024)|26,951|76|
|arrayBuffer (128)|49,883|90|
|arrayBuffer (1024)|31,164|75|
|slice (0, 64)|91,082|81|
|slice (0, 512)|46,664|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:22:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4127.2650144044765,"samples":3},{"name":"new Blob (1024)","opsSec":527.3554392487652,"samples":2},{"name":"text (128)","opsSec":41015.890718913404,"samples":4},{"name":"text (1024)","opsSec":26950.69474421623,"samples":5},{"name":"arrayBuffer (128)","opsSec":49882.7613558176,"samples":4},{"name":"arrayBuffer (1024)","opsSec":31163.737677527293,"samples":6},{"name":"slice (0, 64)","opsSec":91081.87251943086,"samples":3},{"name":"slice (0, 512)","opsSec":46664.30566869226,"samples":3}]}-->
