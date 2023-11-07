## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|835,781,911|99|
|Setter|12,247,008|100|
|Method|839,507,864|99|
|DefineProperty (setter)|838,755,649|100|
|DefineProperty (setter & enumerable=false)|12,270,772|97|
|DefineProperty (setter & configurable=false)|12,065,381|99|
|DefineProperty (setter & enumerable=false & configurable=false)|12,372,063|98|
|DefineProperty (writable)|847,758,115|96|
|DefineProperty (writable & enumerable=false)|184,694,498|23|
|DefineProperty (writable & enumerable=false & configurable=false)|166,864,563|80|
|DefineProperties (setter)|846,938,698|99|
|DefineProperties (setter & enumerable=false)|12,103,703|97|
|DefineProperties (setter & enumerable=false & configurable=false)|12,101,707|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:20:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":835781910.521469,"samples":6},{"name":"Setter","opsSec":12247007.514147347,"samples":5},{"name":"Method","opsSec":839507864.1902106,"samples":6},{"name":"DefineProperty (setter)","opsSec":838755648.5413158,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12270772.294497725,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":12065381.068936782,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12372062.59343553,"samples":6},{"name":"DefineProperty (writable)","opsSec":847758114.9411453,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":184694498.2919235,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":166864563.48916936,"samples":5},{"name":"DefineProperties (setter)","opsSec":846938698.2852505,"samples":9},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12103703.265255606,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":12101707.44768146,"samples":6}]}-->
