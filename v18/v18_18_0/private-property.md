## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|250,027,161|90|
|Raw usage underscore usage|261,174,347|95|
|Manipulating private properties using #|188,049,416|95|
|Manipulating private properties using underscore(_)|183,657,582|91|
|Manipulating private properties using Symbol|184,413,485|92|
|Manipulating private properties using PrivateSymbol|36,362,902|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:15:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":250027160.84362474,"samples":6},{"name":"Raw usage underscore usage","opsSec":261174347.16139615,"samples":7},{"name":"Manipulating private properties using #","opsSec":188049415.67715707,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":183657582.34564096,"samples":9},{"name":"Manipulating private properties using Symbol","opsSec":184413485.0076941,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":36362902.00388521,"samples":6}]}-->
