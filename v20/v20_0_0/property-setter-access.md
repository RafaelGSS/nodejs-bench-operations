## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|103,516,853|51760321|
|Setter|11,012,237|5507220|
|Method|88,570,296|44285155|
|DefineProperty (setter)|102,039,317|51025033|
|DefineProperty (setter & enumerable=false)|10,818,430|5409218|
|DefineProperty (setter & configurable=false)|11,164,610|5582800|
|DefineProperty (setter & enumerable=false & configurable=false)|11,177,473|5588740|
|DefineProperty (writable)|103,048,486|51524260|
|DefineProperty (writable & enumerable=false)|100,843,442|50426429|
|DefineProperty (writable & enumerable=false & configurable=false)|102,307,188|51153602|
|DefineProperties (setter)|97,247,550|48623781|
|DefineProperties (setter & enumerable=false)|11,119,871|5560013|
|DefineProperties (setter & enumerable=false & configurable=false)|11,075,410|5537708|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:59:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":51760321,"opsSec":103516853.49019596},{"name":"Setter","samples":5507220,"opsSec":11012237.310268724},{"name":"Method","samples":44285155,"opsSec":88570296.7144555},{"name":"DefineProperty (setter)","samples":51025033,"opsSec":102039317.58644271},{"name":"DefineProperty (setter & enumerable=false)","samples":5409218,"opsSec":10818430.958611174},{"name":"DefineProperty (setter & configurable=false)","samples":5582800,"opsSec":11164610.681518288},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5588740,"opsSec":11177473.762969641},{"name":"DefineProperty (writable)","samples":51524260,"opsSec":103048486.81838724},{"name":"DefineProperty (writable & enumerable=false)","samples":50426429,"opsSec":100843442.24779731},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":51153602,"opsSec":102307188.85853605},{"name":"DefineProperties (setter)","samples":48623781,"opsSec":97247550.52478904},{"name":"DefineProperties (setter & enumerable=false)","samples":5560013,"opsSec":11119871.900815198},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5537708,"opsSec":11075410.883160172}]}-->
