## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|92,693,211|46347266|
|Setter|11,296,529|5648267|
|Method|92,461,752|46230888|
|DefineProperty (setter)|94,536,839|47285227|
|DefineProperty (setter & enumerable=false)|11,131,961|5565985|
|DefineProperty (setter & configurable=false)|11,310,458|5655233|
|DefineProperty (setter & enumerable=false & configurable=false)|11,332,599|5666547|
|DefineProperty (writable)|94,523,351|47280423|
|DefineProperty (writable & enumerable=false)|94,129,099|47066546|
|DefineProperty (writable & enumerable=false & configurable=false)|92,628,345|46587976|
|DefineProperties (setter)|93,158,883|46579574|
|DefineProperties (setter & enumerable=false)|11,375,568|5687786|
|DefineProperties (setter & enumerable=false & configurable=false)|11,230,180|5615381|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:57:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":46347266,"opsSec":92693211.12174152},{"name":"Setter","samples":5648267,"opsSec":11296529.66213261},{"name":"Method","samples":46230888,"opsSec":92461752.14486794},{"name":"DefineProperty (setter)","samples":47285227,"opsSec":94536839.5359662},{"name":"DefineProperty (setter & enumerable=false)","samples":5565985,"opsSec":11131961.4283897},{"name":"DefineProperty (setter & configurable=false)","samples":5655233,"opsSec":11310458.783927297},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5666547,"opsSec":11332599.468024414},{"name":"DefineProperty (writable)","samples":47280423,"opsSec":94523351.9891066},{"name":"DefineProperty (writable & enumerable=false)","samples":47066546,"opsSec":94129099.79661943},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":46587976,"opsSec":92628345.44864918},{"name":"DefineProperties (setter)","samples":46579574,"opsSec":93158883.98772278},{"name":"DefineProperties (setter & enumerable=false)","samples":5687786,"opsSec":11375568.268813606},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5615381,"opsSec":11230180.546172041}]}-->
