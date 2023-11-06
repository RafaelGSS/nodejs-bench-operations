## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,514|83|
|new Blob (1024)|572|74|
|text (128)|37,235|88|
|text (1024)|15,657|80|
|arrayBuffer (128)|43,119|88|
|arrayBuffer (1024)|17,182|83|
|slice (0, 64)|73,354|86|
|slice (0, 512)|21,422|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:23:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4513.882514893539,"samples":3},{"name":"new Blob (1024)","opsSec":572.2692959074491,"samples":2},{"name":"text (128)","opsSec":37234.82751429237,"samples":4},{"name":"text (1024)","opsSec":15656.861160582685,"samples":3},{"name":"arrayBuffer (128)","opsSec":43119.457118411854,"samples":4},{"name":"arrayBuffer (1024)","opsSec":17181.996035729495,"samples":3},{"name":"slice (0, 64)","opsSec":73353.62863071253,"samples":3},{"name":"slice (0, 512)","opsSec":21422.19025417693,"samples":3}]}-->
