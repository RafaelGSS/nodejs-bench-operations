## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|171,921,232|83|
|Raw usage underscore usage|161,803,194|84|
|Manipulating private properties using #|112,337,048|86|
|Manipulating private properties using underscore(_)|112,649,400|95|
|Manipulating private properties using Symbol|113,481,371|90|
|Manipulating private properties using PrivateSymbol|21,694,070|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:22:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":171921232.13866737,"samples":10},{"name":"Raw usage underscore usage","opsSec":161803193.65054867,"samples":7},{"name":"Manipulating private properties using #","opsSec":112337048.22754543,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":112649400.3835366,"samples":9},{"name":"Manipulating private properties using Symbol","opsSec":113481371.32877804,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":21694070.01576402,"samples":7}]}-->
