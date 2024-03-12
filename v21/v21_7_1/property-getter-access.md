## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|812,828,941|96|
|Getter|91,514,349|96|
|Method|813,516,200|98|
|DefineProperty (getter)|811,461,530|94|
|DefineProperty (getter & enumerable=false)|91,357,645|99|
|DefineProperty (getter & configurable=false)|813,260,769|92|
|DefineProperty (getter & enumerable=false & configurable=false)|92,381,511|99|
|DefineProperty (writable)|814,118,535|97|
|DefineProperty (writable & enumerable=false)|814,903,011|98|
|DefineProperty (writable & enumerable=false & configurable=false)|814,517,618|96|
|DefineProperties (getter)|92,688,716|96|
|DefineProperties (getter & enumerable=false)|85,563,114|92|
|DefineProperties (getter & enumerable=false & configurable=false)|57,990,487|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:04:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"Getter (class)","opsSec":812828941.1264219,"samples":6},{"name":"Getter","opsSec":91514349.41344602,"samples":6},{"name":"Method","opsSec":813516200.3251485,"samples":6},{"name":"DefineProperty (getter)","opsSec":811461529.5374109,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":91357645.21335338,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":813260769.2925522,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":92381511.12351352,"samples":7},{"name":"DefineProperty (writable)","opsSec":814118535.2845768,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":814903010.9505908,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":814517618.4344723,"samples":6},{"name":"DefineProperties (getter)","opsSec":92688716.42064479,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":85563114.09777229,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":57990486.528400734,"samples":6}]}-->
