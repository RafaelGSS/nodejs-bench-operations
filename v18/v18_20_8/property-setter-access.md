## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|104,581,243|52300455|
|Setter|10,916,624|5458314|
|Method|102,492,390|51246225|
|DefineProperty (setter)|105,055,674|52527849|
|DefineProperty (setter & enumerable=false)|10,295,053|5147531|
|DefineProperty (setter & configurable=false)|10,376,207|5188106|
|DefineProperty (setter & enumerable=false & configurable=false)|10,508,902|5254459|
|DefineProperty (writable)|100,376,803|50202654|
|DefineProperty (writable & enumerable=false)|101,039,768|50519997|
|DefineProperty (writable & enumerable=false & configurable=false)|98,627,763|49313896|
|DefineProperties (setter)|99,001,493|49518442|
|DefineProperties (setter & enumerable=false)|10,998,137|5499474|
|DefineProperties (setter & enumerable=false & configurable=false)|10,925,345|5462673|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:55:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":52300455,"opsSec":104581243.70628351},{"name":"Setter","samples":5458314,"opsSec":10916624.091848575},{"name":"Method","samples":51246225,"opsSec":102492390.75939813},{"name":"DefineProperty (setter)","samples":52527849,"opsSec":105055674.88775152},{"name":"DefineProperty (setter & enumerable=false)","samples":5147531,"opsSec":10295053.78454708},{"name":"DefineProperty (setter & configurable=false)","samples":5188106,"opsSec":10376207.455221133},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5254459,"opsSec":10508902.804126546},{"name":"DefineProperty (writable)","samples":50202654,"opsSec":100376803.59757517},{"name":"DefineProperty (writable & enumerable=false)","samples":50519997,"opsSec":101039768.27715766},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":49313896,"opsSec":98627763.39794861},{"name":"DefineProperties (setter)","samples":49518442,"opsSec":99001493.342166},{"name":"DefineProperties (setter & enumerable=false)","samples":5499474,"opsSec":10998137.789185347},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5462673,"opsSec":10925345.65038894}]}-->
