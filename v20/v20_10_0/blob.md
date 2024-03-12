## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,040|86|
|new Blob (1024)|657|92|
|text (128)|5,809|87|
|text (1024)|715|87|
|arrayBuffer (128)|5,811|87|
|arrayBuffer (1024)|724|87|
|slice (0, 64)|72,054|69|
|slice (0, 512)|21,166|60|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:29:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5039.749061483441,"samples":3},{"name":"new Blob (1024)","opsSec":657.0431827455141,"samples":2},{"name":"text (128)","opsSec":5808.885950022862,"samples":5},{"name":"text (1024)","opsSec":715.4204035066023,"samples":3},{"name":"arrayBuffer (128)","opsSec":5811.078932967013,"samples":3},{"name":"arrayBuffer (1024)","opsSec":723.6753180777985,"samples":3},{"name":"slice (0, 64)","opsSec":72053.91145949837,"samples":4},{"name":"slice (0, 512)","opsSec":21166.416108613234,"samples":4}]}-->
