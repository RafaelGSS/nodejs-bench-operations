## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|125,073,973|62626994|
|Getter|48,558,898|24333570|
|Method|94,672,357|47337388|
|DefineProperty (getter)|96,331,290|48172417|
|DefineProperty (getter & enumerable=false)|49,985,731|25009625|
|DefineProperty (getter & configurable=false)|96,789,651|48395704|
|DefineProperty (getter & enumerable=false & configurable=false)|48,075,803|24037910|
|DefineProperty (writable)|84,465,846|42237184|
|DefineProperty (writable & enumerable=false)|96,754,190|48377209|
|DefineProperty (writable & enumerable=false & configurable=false)|96,148,880|48084704|
|DefineProperties (getter)|47,491,918|23748004|
|DefineProperties (getter & enumerable=false)|48,997,124|24498568|
|DefineProperties (getter & enumerable=false & configurable=false)|48,412,290|24206803|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:55:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":125073973.53255764,"samples":62626994},{"name":"Getter","opsSec":48558898.91231932,"samples":24333570},{"name":"Method","opsSec":94672357.4999553,"samples":47337388},{"name":"DefineProperty (getter)","opsSec":96331290.01328671,"samples":48172417},{"name":"DefineProperty (getter & enumerable=false)","opsSec":49985731.4679354,"samples":25009625},{"name":"DefineProperty (getter & configurable=false)","opsSec":96789651.84855686,"samples":48395704},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":48075803.26962046,"samples":24037910},{"name":"DefineProperty (writable)","opsSec":84465846.07185811,"samples":42237184},{"name":"DefineProperty (writable & enumerable=false)","opsSec":96754190.4341441,"samples":48377209},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":96148880.59858772,"samples":48084704},{"name":"DefineProperties (getter)","opsSec":47491918.75582745,"samples":23748004},{"name":"DefineProperties (getter & enumerable=false)","opsSec":48997124.142695956,"samples":24498568},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":48412290.541241415,"samples":24206803}]}-->
