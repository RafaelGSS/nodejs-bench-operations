## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|95,389,176|47697071|
|Getter|46,252,939|23129073|
|Method|94,188,322|47094169|
|DefineProperty (getter)|94,878,105|47439776|
|DefineProperty (getter & enumerable=false)|49,614,210|24809961|
|DefineProperty (getter & configurable=false)|92,584,097|46348086|
|DefineProperty (getter & enumerable=false & configurable=false)|47,442,904|23721458|
|DefineProperty (writable)|88,802,054|44405346|
|DefineProperty (writable & enumerable=false)|95,547,479|47781942|
|DefineProperty (writable & enumerable=false & configurable=false)|95,563,620|47783752|
|DefineProperties (getter)|44,848,429|22424219|
|DefineProperties (getter & enumerable=false)|47,588,324|23794825|
|DefineProperties (getter & enumerable=false & configurable=false)|45,590,522|22795288|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:52:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":47697071,"opsSec":95389176.42103224},{"name":"Getter","samples":23129073,"opsSec":46252939.67660412},{"name":"Method","samples":47094169,"opsSec":94188322.5531151},{"name":"DefineProperty (getter)","samples":47439776,"opsSec":94878105.1088971},{"name":"DefineProperty (getter & enumerable=false)","samples":24809961,"opsSec":49614210.61053136},{"name":"DefineProperty (getter & configurable=false)","samples":46348086,"opsSec":92584097.09877998},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":23721458,"opsSec":47442904.80347446},{"name":"DefineProperty (writable)","samples":44405346,"opsSec":88802054.04659878},{"name":"DefineProperty (writable & enumerable=false)","samples":47781942,"opsSec":95547479.64431483},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47783752,"opsSec":95563620.29447123},{"name":"DefineProperties (getter)","samples":22424219,"opsSec":44848429.389101565},{"name":"DefineProperties (getter & enumerable=false)","samples":23794825,"opsSec":47588324.76033208},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":22795288,"opsSec":45590522.84145036}]}-->
