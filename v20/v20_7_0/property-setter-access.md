## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|842,224,971|100|
|Setter|12,475,311|99|
|Method|847,445,309|98|
|DefineProperty (setter)|846,336,888|98|
|DefineProperty (setter & enumerable=false)|12,304,369|96|
|DefineProperty (setter & configurable=false)|12,347,672|95|
|DefineProperty (setter & enumerable=false & configurable=false)|12,170,501|98|
|DefineProperty (writable)|847,340,716|98|
|DefineProperty (writable & enumerable=false)|849,009,656|98|
|DefineProperty (writable & enumerable=false & configurable=false)|847,564,754|99|
|DefineProperties (setter)|848,767,483|100|
|DefineProperties (setter & enumerable=false)|12,094,112|100|
|DefineProperties (setter & enumerable=false & configurable=false)|11,045,309|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:23:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":842224971.3315878,"samples":6},{"name":"Setter","opsSec":12475311.348692842,"samples":4},{"name":"Method","opsSec":847445309.2741455,"samples":8},{"name":"DefineProperty (setter)","opsSec":846336887.6048079,"samples":10},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12304369.152569126,"samples":4},{"name":"DefineProperty (setter & configurable=false)","opsSec":12347672.058002658,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12170500.797664164,"samples":4},{"name":"DefineProperty (writable)","opsSec":847340715.7938131,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":849009655.5176858,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":847564753.899984,"samples":9},{"name":"DefineProperties (setter)","opsSec":848767482.8130318,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12094111.878476959,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11045308.70485468,"samples":4}]}-->
