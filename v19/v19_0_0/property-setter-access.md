## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|478,528,769|95|
|Setter|7,582,187|98|
|Method|480,683,605|99|
|DefineProperty (setter)|479,256,921|96|
|DefineProperty (setter & enumerable=false)|7,406,795|98|
|DefineProperty (setter & configurable=false)|7,603,397|96|
|DefineProperty (setter & enumerable=false & configurable=false)|7,676,450|99|
|DefineProperty (writable)|714,840,211|97|
|DefineProperty (writable & enumerable=false)|717,293,547|99|
|DefineProperty (writable & enumerable=false & configurable=false)|715,228,137|97|
|DefineProperties (setter)|715,116,944|95|
|DefineProperties (setter & enumerable=false)|7,181,336|93|
|DefineProperties (setter & enumerable=false & configurable=false)|6,926,159|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:22:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":478528769.4098363,"samples":7},{"name":"Setter","opsSec":7582186.604667132,"samples":5},{"name":"Method","opsSec":480683605.37841576,"samples":7},{"name":"DefineProperty (setter)","opsSec":479256921.49727494,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7406795.16112556,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":7603396.55822216,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7676449.735651805,"samples":8},{"name":"DefineProperty (writable)","opsSec":714840210.9874775,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":717293546.9736316,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":715228136.859472,"samples":6},{"name":"DefineProperties (setter)","opsSec":715116944.0238223,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":7181335.723256968,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6926159.360938545,"samples":5}]}-->
