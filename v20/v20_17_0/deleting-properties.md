## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,830,478|1415240|
|Using delete property (proto: null)|8,118,953|4059477|
|Using delete property (cached proto: null)|2,808,161|1404081|
|Using undefined assignment|18,458,939|9229470|
|Using undefined assignment (proto: null)|8,690,471|4345236|
|Using undefined property (cached proto: null)|18,234,002|9117002|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:54:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":2830478.6583535164,"samples":1415240},{"name":"Using delete property (proto: null)","opsSec":8118953.593960353,"samples":4059477},{"name":"Using delete property (cached proto: null)","opsSec":2808161.5619059093,"samples":1404081},{"name":"Using undefined assignment","opsSec":18458939.55721362,"samples":9229470},{"name":"Using undefined assignment (proto: null)","opsSec":8690471.530685293,"samples":4345236},{"name":"Using undefined property (cached proto: null)","opsSec":18234002.76034756,"samples":9117002}]}-->
