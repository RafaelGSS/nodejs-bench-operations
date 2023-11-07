## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|840,589,708|95|
|Setter|12,701,953|99|
|Method|820,067,330|96|
|DefineProperty (setter)|848,370,983|97|
|DefineProperty (setter & enumerable=false)|12,844,240|98|
|DefineProperty (setter & configurable=false)|12,850,971|96|
|DefineProperty (setter & enumerable=false & configurable=false)|12,757,874|97|
|DefineProperty (writable)|848,507,224|99|
|DefineProperty (writable & enumerable=false)|849,324,618|97|
|DefineProperty (writable & enumerable=false & configurable=false)|848,379,857|98|
|DefineProperties (setter)|385,709,590|48|
|DefineProperties (setter & enumerable=false)|11,392,733|95|
|DefineProperties (setter & enumerable=false & configurable=false)|11,956,082|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:22:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":840589707.8924884,"samples":6},{"name":"Setter","opsSec":12701953.353314746,"samples":6},{"name":"Method","opsSec":820067329.7251879,"samples":7},{"name":"DefineProperty (setter)","opsSec":848370983.4311287,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12844239.84391175,"samples":4},{"name":"DefineProperty (setter & configurable=false)","opsSec":12850971.475711862,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12757874.32826341,"samples":5},{"name":"DefineProperty (writable)","opsSec":848507223.928437,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":849324618.1189994,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":848379856.9565064,"samples":7},{"name":"DefineProperties (setter)","opsSec":385709589.5464927,"samples":8},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11392732.735556496,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11956081.621210134,"samples":5}]}-->
