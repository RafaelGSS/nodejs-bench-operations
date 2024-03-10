## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,925|86|
|new Blob (1024)|661|75|
|text (128)|30,761|75|
|text (1024)|20,291|77|
|arrayBuffer (128)|34,994|75|
|arrayBuffer (1024)|24,640|83|
|slice (0, 64)|98,835|80|
|slice (0, 512)|52,635|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:38:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":4924.629202522782,"samples":3},{"name":"new Blob (1024)","opsSec":661.3534200930154,"samples":2},{"name":"text (128)","opsSec":30761.06299744654,"samples":4},{"name":"text (1024)","opsSec":20290.97399701821,"samples":3},{"name":"arrayBuffer (128)","opsSec":34993.7388192622,"samples":4},{"name":"arrayBuffer (1024)","opsSec":24639.69486249343,"samples":5},{"name":"slice (0, 64)","opsSec":98835.48693710638,"samples":3},{"name":"slice (0, 512)","opsSec":52634.64834578858,"samples":3}]}-->
