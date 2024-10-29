## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|124,849,906|62484920|
|Getter|48,786,123|24393073|
|Method|93,635,023|46817523|
|DefineProperty (getter)|94,323,938|47161995|
|DefineProperty (getter & enumerable=false)|50,238,185|25120137|
|DefineProperty (getter & configurable=false)|95,377,505|47688792|
|DefineProperty (getter & enumerable=false & configurable=false)|48,642,820|24323467|
|DefineProperty (writable)|97,320,980|48662916|
|DefineProperty (writable & enumerable=false)|95,861,205|47930629|
|DefineProperty (writable & enumerable=false & configurable=false)|89,150,586|44580938|
|DefineProperties (getter)|49,935,152|24967594|
|DefineProperties (getter & enumerable=false)|49,808,428|24910067|
|DefineProperties (getter & enumerable=false & configurable=false)|50,424,969|25220539|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:56:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":124849906.6826425,"samples":62484920},{"name":"Getter","opsSec":48786123.65595537,"samples":24393073},{"name":"Method","opsSec":93635023.71486436,"samples":46817523},{"name":"DefineProperty (getter)","opsSec":94323938.49912956,"samples":47161995},{"name":"DefineProperty (getter & enumerable=false)","opsSec":50238185.29720808,"samples":25120137},{"name":"DefineProperty (getter & configurable=false)","opsSec":95377505.5996904,"samples":47688792},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":48642820.08213437,"samples":24323467},{"name":"DefineProperty (writable)","opsSec":97320980.35448736,"samples":48662916},{"name":"DefineProperty (writable & enumerable=false)","opsSec":95861205.0846148,"samples":47930629},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":89150586.68290718,"samples":44580938},{"name":"DefineProperties (getter)","opsSec":49935152.945522636,"samples":24967594},{"name":"DefineProperties (getter & enumerable=false)","opsSec":49808428.72040013,"samples":24910067},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":50424969.54178,"samples":25220539}]}-->
