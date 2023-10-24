## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|709,898,769|96|
|Raw usage underscore usage|711,018,501|92|
|Manipulating private properties using #|702,944,440|99|
|Manipulating private properties using underscore(_)|703,637,259|94|
|Manipulating private properties using Symbol|701,951,384|97|
|Manipulating private properties using PrivateSymbol|32,769,473|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:10:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":709898769.2340459,"samples":7},{"name":"Raw usage underscore usage","opsSec":711018500.509551,"samples":7},{"name":"Manipulating private properties using #","opsSec":702944439.6322176,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":703637258.9019254,"samples":8},{"name":"Manipulating private properties using Symbol","opsSec":701951383.5475267,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":32769472.801452525,"samples":7}]}-->
