## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|910,196,331|99|
|Using backtick (`)|911,916,834|100|
|Using array.join|12,275,542|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:16:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":910196331.4779207,"samples":6},{"name":"Using backtick (`)","opsSec":911916834.0757344,"samples":8},{"name":"Using array.join","opsSec":12275541.716813013,"samples":5}]}-->
