## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,214|87|
|new Blob (1024)|410|68|
|text (128)|29,299|69|
|text (1024)|20,666|82|
|arrayBuffer (128)|29,235|83|
|arrayBuffer (1024)|21,169|84|
|slice (0, 64)|58,968|75|
|slice (0, 512)|33,465|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3214.3051120811683,"samples":6},{"name":"new Blob (1024)","opsSec":410.08539203581006,"samples":2},{"name":"text (128)","opsSec":29299.195583352168,"samples":4},{"name":"text (1024)","opsSec":20666.499899484636,"samples":5},{"name":"arrayBuffer (128)","opsSec":29235.296747656274,"samples":4},{"name":"arrayBuffer (1024)","opsSec":21169.069064396866,"samples":3},{"name":"slice (0, 64)","opsSec":58968.36729897568,"samples":3},{"name":"slice (0, 512)","opsSec":33464.8607644175,"samples":3}]}-->
