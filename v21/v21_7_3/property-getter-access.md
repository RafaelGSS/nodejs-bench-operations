## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|138,793,632|69397766|
|Getter|50,204,090|25150313|
|Method|99,207,808|49618166|
|DefineProperty (getter)|97,187,230|48593617|
|DefineProperty (getter & enumerable=false)|48,228,113|24150754|
|DefineProperty (getter & configurable=false)|95,758,104|47879060|
|DefineProperty (getter & enumerable=false & configurable=false)|51,165,081|25582552|
|DefineProperty (writable)|97,656,848|48830966|
|DefineProperty (writable & enumerable=false)|97,624,563|48817541|
|DefineProperty (writable & enumerable=false & configurable=false)|97,850,971|48927524|
|DefineProperties (getter)|51,520,069|25760048|
|DefineProperties (getter & enumerable=false)|51,149,559|25576158|
|DefineProperties (getter & enumerable=false & configurable=false)|50,563,156|25281736|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:54:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":138793632.19276255,"samples":69397766},{"name":"Getter","opsSec":50204090.562421136,"samples":25150313},{"name":"Method","opsSec":99207808.76290259,"samples":49618166},{"name":"DefineProperty (getter)","opsSec":97187230.5012597,"samples":48593617},{"name":"DefineProperty (getter & enumerable=false)","opsSec":48228113.01077681,"samples":24150754},{"name":"DefineProperty (getter & configurable=false)","opsSec":95758104.67870326,"samples":47879060},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51165081.38503403,"samples":25582552},{"name":"DefineProperty (writable)","opsSec":97656848.76570804,"samples":48830966},{"name":"DefineProperty (writable & enumerable=false)","opsSec":97624563.34379795,"samples":48817541},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":97850971.9199137,"samples":48927524},{"name":"DefineProperties (getter)","opsSec":51520069.10652393,"samples":25760048},{"name":"DefineProperties (getter & enumerable=false)","opsSec":51149559.85711666,"samples":25576158},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":50563156.081400804,"samples":25281736}]}-->
