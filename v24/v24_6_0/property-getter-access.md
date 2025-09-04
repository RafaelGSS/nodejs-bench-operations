## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|94,391,989|47196004|
|Getter|50,874,848|25466635|
|Method|96,728,304|48374707|
|DefineProperty (getter)|95,308,130|47663861|
|DefineProperty (getter & enumerable=false)|50,580,649|25290367|
|DefineProperty (getter & configurable=false)|95,296,709|47648378|
|DefineProperty (getter & enumerable=false & configurable=false)|51,060,676|25539254|
|DefineProperty (writable)|94,706,789|47359825|
|DefineProperty (writable & enumerable=false)|95,296,085|47648051|
|DefineProperty (writable & enumerable=false & configurable=false)|92,253,639|46126847|
|DefineProperties (getter)|50,719,053|25359535|
|DefineProperties (getter & enumerable=false)|50,279,597|25139807|
|DefineProperties (getter & enumerable=false & configurable=false)|50,360,381|25180913|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:55:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":47196004,"opsSec":94391989.687954},{"name":"Getter","samples":25466635,"opsSec":50874848.07171624},{"name":"Method","samples":48374707,"opsSec":96728304.01493178},{"name":"DefineProperty (getter)","samples":47663861,"opsSec":95308130.07954833},{"name":"DefineProperty (getter & enumerable=false)","samples":25290367,"opsSec":50580649.53031528},{"name":"DefineProperty (getter & configurable=false)","samples":47648378,"opsSec":95296709.68579909},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25539254,"opsSec":51060676.89677817},{"name":"DefineProperty (writable)","samples":47359825,"opsSec":94706789.57562995},{"name":"DefineProperty (writable & enumerable=false)","samples":47648051,"opsSec":95296085.03729686},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":46126847,"opsSec":92253639.2013383},{"name":"DefineProperties (getter)","samples":25359535,"opsSec":50719053.16127435},{"name":"DefineProperties (getter & enumerable=false)","samples":25139807,"opsSec":50279597.00549621},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":25180913,"opsSec":50360381.66425387}]}-->
