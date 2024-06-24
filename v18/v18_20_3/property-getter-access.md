## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|17,144,714|8572358|
|Getter|13,611,438|6805720|
|Method|16,900,596|8450299|
|DefineProperty (getter)|17,066,321|8533161|
|DefineProperty (getter & enumerable=false)|13,953,050|6976526|
|DefineProperty (getter & configurable=false)|16,267,771|8133886|
|DefineProperty (getter & enumerable=false & configurable=false)|13,216,730|6608366|
|DefineProperty (writable)|17,023,023|8511512|
|DefineProperty (writable & enumerable=false)|17,012,180|8506091|
|DefineProperty (writable & enumerable=false & configurable=false)|17,021,878|8510940|
|DefineProperties (getter)|14,309,212|7154607|
|DefineProperties (getter & enumerable=false)|14,282,456|7141229|
|DefineProperties (getter & enumerable=false & configurable=false)|14,242,837|7121419|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:32:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":17144714.507987324,"samples":8572358},{"name":"Getter","opsSec":13611438.865846347,"samples":6805720},{"name":"Method","opsSec":16900596.104411557,"samples":8450299},{"name":"DefineProperty (getter)","opsSec":17066321.796839688,"samples":8533161},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13953050.70371761,"samples":6976526},{"name":"DefineProperty (getter & configurable=false)","opsSec":16267771.502728883,"samples":8133886},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13216730.827170072,"samples":6608366},{"name":"DefineProperty (writable)","opsSec":17023023.696936347,"samples":8511512},{"name":"DefineProperty (writable & enumerable=false)","opsSec":17012180.118989125,"samples":8506091},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":17021878.32403569,"samples":8510940},{"name":"DefineProperties (getter)","opsSec":14309212.847844724,"samples":7154607},{"name":"DefineProperties (getter & enumerable=false)","opsSec":14282456.679100463,"samples":7141229},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":14242837.332256215,"samples":7121419}]}-->
