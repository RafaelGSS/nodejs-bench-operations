## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|90,410,630|45208914|
|Setter|11,390,657|5695552|
|Method|92,917,739|46458875|
|DefineProperty (setter)|91,348,135|45674074|
|DefineProperty (setter & enumerable=false)|11,549,969|5777454|
|DefineProperty (setter & configurable=false)|11,102,201|5551320|
|DefineProperty (setter & enumerable=false & configurable=false)|11,339,798|5669901|
|DefineProperty (writable)|92,072,261|46036135|
|DefineProperty (writable & enumerable=false)|92,103,648|46061663|
|DefineProperty (writable & enumerable=false & configurable=false)|91,366,803|45683407|
|DefineProperties (setter)|83,536,367|41768192|
|DefineProperties (setter & enumerable=false)|11,529,079|5764711|
|DefineProperties (setter & enumerable=false & configurable=false)|11,375,753|5687880|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:20:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":45208914,"opsSec":90410630.59051995},{"name":"Setter","samples":5695552,"opsSec":11390657.349544011},{"name":"Method","samples":46458875,"opsSec":92917739.03570679},{"name":"DefineProperty (setter)","samples":45674074,"opsSec":91348135.02856483},{"name":"DefineProperty (setter & enumerable=false)","samples":5777454,"opsSec":11549969.902767831},{"name":"DefineProperty (setter & configurable=false)","samples":5551320,"opsSec":11102201.418635158},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5669901,"opsSec":11339798.280546164},{"name":"DefineProperty (writable)","samples":46036135,"opsSec":92072261.71349646},{"name":"DefineProperty (writable & enumerable=false)","samples":46061663,"opsSec":92103648.05559291},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":45683407,"opsSec":91366803.4014508},{"name":"DefineProperties (setter)","samples":41768192,"opsSec":83536367.29272655},{"name":"DefineProperties (setter & enumerable=false)","samples":5764711,"opsSec":11529079.355761549},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5687880,"opsSec":11375753.675080957}]}-->
