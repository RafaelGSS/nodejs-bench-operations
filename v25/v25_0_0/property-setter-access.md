## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|97,037,850|48544240|
|Setter|11,327,901|5665099|
|Method|94,492,540|47264004|
|DefineProperty (setter)|96,854,304|48628092|
|DefineProperty (setter & enumerable=false)|11,163,469|5583686|
|DefineProperty (setter & configurable=false)|11,018,009|5509006|
|DefineProperty (setter & enumerable=false & configurable=false)|11,001,892|5502176|
|DefineProperty (writable)|94,895,020|47452415|
|DefineProperty (writable & enumerable=false)|97,194,488|48621212|
|DefineProperty (writable & enumerable=false & configurable=false)|97,614,956|48807502|
|DefineProperties (setter)|94,717,495|47358767|
|DefineProperties (setter & enumerable=false)|11,345,947|5673800|
|DefineProperties (setter & enumerable=false & configurable=false)|11,054,505|5527255|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:23:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":48544240,"opsSec":97037850.50150083},{"name":"Setter","samples":5665099,"opsSec":11327901.653088493},{"name":"Method","samples":47264004,"opsSec":94492540.41394071},{"name":"DefineProperty (setter)","samples":48628092,"opsSec":96854304.49726342},{"name":"DefineProperty (setter & enumerable=false)","samples":5583686,"opsSec":11163469.005639309},{"name":"DefineProperty (setter & configurable=false)","samples":5509006,"opsSec":11018009.928614134},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5502176,"opsSec":11001892.614921074},{"name":"DefineProperty (writable)","samples":47452415,"opsSec":94895020.70171008},{"name":"DefineProperty (writable & enumerable=false)","samples":48621212,"opsSec":97194488.65014264},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":48807502,"opsSec":97614956.55913112},{"name":"DefineProperties (setter)","samples":47358767,"opsSec":94717495.73413174},{"name":"DefineProperties (setter & enumerable=false)","samples":5673800,"opsSec":11345947.916523876},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5527255,"opsSec":11054505.268671744}]}-->
