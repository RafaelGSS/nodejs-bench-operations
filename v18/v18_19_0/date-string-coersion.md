## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|973,058|95|
|Using brackets {}|986,060|95|
|Using '' + |993,676|96|
|Using date.toString()|1,092,743|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:42:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":973058.2137640811,"samples":4},{"name":"Using brackets {}","opsSec":986059.6253381257,"samples":4},{"name":"Using '' + ","opsSec":993675.6785243332,"samples":6},{"name":"Using date.toString()","opsSec":1092743.396453077,"samples":4}]}-->
