## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,169|82|
|new Blob (1024)|688|81|
|text (128)|33,791|77|
|text (1024)|23,490|85|
|arrayBuffer (128)|34,210|79|
|arrayBuffer (1024)|23,493|82|
|slice (0, 64)|87,050|80|
|slice (0, 512)|40,120|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:29:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5168.853133526887,"samples":6},{"name":"new Blob (1024)","opsSec":688.1115696121568,"samples":2},{"name":"text (128)","opsSec":33790.95762690655,"samples":4},{"name":"text (1024)","opsSec":23489.968085882432,"samples":3},{"name":"arrayBuffer (128)","opsSec":34210.16486714638,"samples":4},{"name":"arrayBuffer (1024)","opsSec":23492.94317770886,"samples":3},{"name":"slice (0, 64)","opsSec":87050.17579847778,"samples":3},{"name":"slice (0, 512)","opsSec":40119.951756050956,"samples":3}]}-->
