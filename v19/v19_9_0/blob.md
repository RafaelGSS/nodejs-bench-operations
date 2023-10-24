## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,579|78|
|new Blob (1024)|331|65|
|text (128)|2,589|76|
|text (1024)|349|77|
|arrayBuffer (128)|2,537|75|
|arrayBuffer (1024)|361|80|
|slice (0, 64)|45,068|68|
|slice (0, 512)|13,102|57|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":2579.0438944899224,"samples":2},{"name":"new Blob (1024)","opsSec":330.5992831930977,"samples":2},{"name":"text (128)","opsSec":2588.7041181385885,"samples":4},{"name":"text (1024)","opsSec":348.69986139631214,"samples":3},{"name":"arrayBuffer (128)","opsSec":2536.6672304775293,"samples":4},{"name":"arrayBuffer (1024)","opsSec":360.5738630772147,"samples":4},{"name":"slice (0, 64)","opsSec":45067.91375222453,"samples":5},{"name":"slice (0, 512)","opsSec":13102.139421901235,"samples":4}]}-->
