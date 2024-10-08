## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|149,155,529|74582605|
|Getter|49,978,599|24990049|
|Method|101,368,746|50684423|
|DefineProperty (getter)|98,600,340|49304754|
|DefineProperty (getter & enumerable=false)|50,808,383|25404193|
|DefineProperty (getter & configurable=false)|99,082,115|49541135|
|DefineProperty (getter & enumerable=false & configurable=false)|49,184,209|24597868|
|DefineProperty (writable)|92,684,822|46342418|
|DefineProperty (writable & enumerable=false)|97,621,925|48965452|
|DefineProperty (writable & enumerable=false & configurable=false)|99,048,586|49526802|
|DefineProperties (getter)|50,892,802|25453462|
|DefineProperties (getter & enumerable=false)|50,122,693|25062981|
|DefineProperties (getter & enumerable=false & configurable=false)|50,270,208|25225771|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:34:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Getter (class)","opsSec":149155529.8061156,"samples":74582605},{"name":"Getter","opsSec":49978599.34172014,"samples":24990049},{"name":"Method","opsSec":101368746.45589098,"samples":50684423},{"name":"DefineProperty (getter)","opsSec":98600340.92910314,"samples":49304754},{"name":"DefineProperty (getter & enumerable=false)","opsSec":50808383.967664644,"samples":25404193},{"name":"DefineProperty (getter & configurable=false)","opsSec":99082115.43189992,"samples":49541135},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":49184209.090389155,"samples":24597868},{"name":"DefineProperty (writable)","opsSec":92684822.09727669,"samples":46342418},{"name":"DefineProperty (writable & enumerable=false)","opsSec":97621925.14010376,"samples":48965452},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":99048586.39671032,"samples":49526802},{"name":"DefineProperties (getter)","opsSec":50892802.87577167,"samples":25453462},{"name":"DefineProperties (getter & enumerable=false)","opsSec":50122693.499156915,"samples":25062981},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":50270208.81088365,"samples":25225771}]}-->
