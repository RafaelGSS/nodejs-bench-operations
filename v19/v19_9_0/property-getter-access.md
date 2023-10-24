## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|592,430,305|96|
|Getter|71,598,216|95|
|Method|597,002,304|96|
|DefineProperty (getter)|596,219,056|98|
|DefineProperty (getter & enumerable=false)|71,784,207|93|
|DefineProperty (getter & configurable=false)|596,902,654|94|
|DefineProperty (getter & enumerable=false & configurable=false)|71,675,508|95|
|DefineProperty (writable)|597,360,512|94|
|DefineProperty (writable & enumerable=false)|597,956,404|98|
|DefineProperty (writable & enumerable=false & configurable=false)|306,470,492|52|
|DefineProperties (getter)|45,189,087|92|
|DefineProperties (getter & enumerable=false)|70,468,113|98|
|DefineProperties (getter & enumerable=false & configurable=false)|71,396,493|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:18:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":592430305.2619624,"samples":6},{"name":"Getter","opsSec":71598216.11042655,"samples":6},{"name":"Method","opsSec":597002303.6605844,"samples":6},{"name":"DefineProperty (getter)","opsSec":596219056.2329857,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":71784206.9752081,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":596902654.1485534,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":71675508.18467958,"samples":5},{"name":"DefineProperty (writable)","opsSec":597360511.7933724,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":597956403.7025591,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":306470491.904601,"samples":6},{"name":"DefineProperties (getter)","opsSec":45189086.978065036,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":70468113.00381406,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":71396492.9342811,"samples":5}]}-->
