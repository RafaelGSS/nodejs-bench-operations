## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|822,486,743|98|
|Getter|91,731,446|93|
|Method|822,679,771|99|
|DefineProperty (getter)|822,639,419|100|
|DefineProperty (getter & enumerable=false)|92,189,925|91|
|DefineProperty (getter & configurable=false)|832,702,520|97|
|DefineProperty (getter & enumerable=false & configurable=false)|94,115,143|94|
|DefineProperty (writable)|841,024,024|96|
|DefineProperty (writable & enumerable=false)|837,854,146|97|
|DefineProperty (writable & enumerable=false & configurable=false)|823,250,544|99|
|DefineProperties (getter)|70,897,190|78|
|DefineProperties (getter & enumerable=false)|59,468,844|92|
|DefineProperties (getter & enumerable=false & configurable=false)|59,245,904|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:04:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":822486743.3168354,"samples":6},{"name":"Getter","opsSec":91731446.16848533,"samples":5},{"name":"Method","opsSec":822679770.6208854,"samples":7},{"name":"DefineProperty (getter)","opsSec":822639418.8596534,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":92189925.20295052,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":832702520.4703664,"samples":9},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":94115143.11145654,"samples":6},{"name":"DefineProperty (writable)","opsSec":841024023.8552996,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":837854145.5427616,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":823250543.9412687,"samples":8},{"name":"DefineProperties (getter)","opsSec":70897189.56660783,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":59468843.8426722,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":59245903.9714573,"samples":6}]}-->
