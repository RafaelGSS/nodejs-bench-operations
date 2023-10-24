## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,984,456|87|
|Using delete property (proto: null)|12,559,077|88|
|Using delete property (cached proto: null)|1,991,277|80|
|Using undefined assignment|634,158,218|85|
|Using undefined assignment (proto: null)|14,514,809|89|
|Using undefined property (cached proto: null)|624,468,841|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":1984455.8145832347,"samples":4},{"name":"Using delete property (proto: null)","opsSec":12559077.455596503,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":1991276.512799457,"samples":6},{"name":"Using undefined assignment","opsSec":634158217.6232731,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":14514808.698719436,"samples":4},{"name":"Using undefined property (cached proto: null)","opsSec":624468840.853403,"samples":6}]}-->
