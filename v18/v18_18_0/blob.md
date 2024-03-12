## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,100|84|
|new Blob (1024)|676|82|
|text (128)|34,705|83|
|text (1024)|23,208|83|
|arrayBuffer (128)|35,655|81|
|arrayBuffer (1024)|22,422|77|
|slice (0, 64)|90,431|81|
|slice (0, 512)|52,274|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:29:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"new Blob (128)","opsSec":5100.359928169176,"samples":3},{"name":"new Blob (1024)","opsSec":675.617355924289,"samples":2},{"name":"text (128)","opsSec":34705.41892689879,"samples":4},{"name":"text (1024)","opsSec":23208.052142234355,"samples":4},{"name":"arrayBuffer (128)","opsSec":35655.41921197352,"samples":5},{"name":"arrayBuffer (1024)","opsSec":22422.271851139383,"samples":3},{"name":"slice (0, 64)","opsSec":90430.50026132587,"samples":3},{"name":"slice (0, 512)","opsSec":52274.2045574827,"samples":3}]}-->
