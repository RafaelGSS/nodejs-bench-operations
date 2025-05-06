## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|95,983,004|47991525|
|Setter|11,481,165|5753980|
|Method|92,675,644|46337827|
|DefineProperty (setter)|96,391,677|48197687|
|DefineProperty (setter & enumerable=false)|11,709,392|5854804|
|DefineProperty (setter & configurable=false)|11,748,878|5874775|
|DefineProperty (setter & enumerable=false & configurable=false)|11,731,990|5866031|
|DefineProperty (writable)|96,439,781|48220575|
|DefineProperty (writable & enumerable=false)|95,725,369|47862708|
|DefineProperty (writable & enumerable=false & configurable=false)|93,199,235|46607083|
|DefineProperties (setter)|94,915,673|47458696|
|DefineProperties (setter & enumerable=false)|11,583,976|5792081|
|DefineProperties (setter & enumerable=false & configurable=false)|11,452,201|5726104|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:33:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Setter (class)","samples":47991525,"opsSec":95983004.8879877},{"name":"Setter","samples":5753980,"opsSec":11481165.691792792},{"name":"Method","samples":46337827,"opsSec":92675644.9177868},{"name":"DefineProperty (setter)","samples":48197687,"opsSec":96391677.9575004},{"name":"DefineProperty (setter & enumerable=false)","samples":5854804,"opsSec":11709392.453503715},{"name":"DefineProperty (setter & configurable=false)","samples":5874775,"opsSec":11748878.81005134},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5866031,"opsSec":11731990.059436956},{"name":"DefineProperty (writable)","samples":48220575,"opsSec":96439781.32662341},{"name":"DefineProperty (writable & enumerable=false)","samples":47862708,"opsSec":95725369.66892107},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":46607083,"opsSec":93199235.66884433},{"name":"DefineProperties (setter)","samples":47458696,"opsSec":94915673.07716057},{"name":"DefineProperties (setter & enumerable=false)","samples":5792081,"opsSec":11583976.725876248},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5726104,"opsSec":11452201.128679324}]}-->
