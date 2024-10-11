## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|161,768,127|80884153|
|Getter|55,618,295|27810112|
|Method|102,003,735|52085680|
|DefineProperty (getter)|107,024,079|53538967|
|DefineProperty (getter & enumerable=false)|56,574,478|28291027|
|DefineProperty (getter & configurable=false)|106,801,354|53405683|
|DefineProperty (getter & enumerable=false & configurable=false)|56,608,374|28407994|
|DefineProperty (writable)|105,693,759|52850596|
|DefineProperty (writable & enumerable=false)|107,156,475|53580731|
|DefineProperty (writable & enumerable=false & configurable=false)|99,580,157|49843613|
|DefineProperties (getter)|55,156,762|27578390|
|DefineProperties (getter & enumerable=false)|52,558,013|26284083|
|DefineProperties (getter & enumerable=false & configurable=false)|54,203,184|27101599|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:42:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Getter (class)","opsSec":161768127.40798733,"samples":80884153},{"name":"Getter","opsSec":55618295.936153084,"samples":27810112},{"name":"Method","opsSec":102003735.33448373,"samples":52085680},{"name":"DefineProperty (getter)","opsSec":107024079.91108507,"samples":53538967},{"name":"DefineProperty (getter & enumerable=false)","opsSec":56574478.11163607,"samples":28291027},{"name":"DefineProperty (getter & configurable=false)","opsSec":106801354.22745201,"samples":53405683},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":56608374.40930215,"samples":28407994},{"name":"DefineProperty (writable)","opsSec":105693759.61482388,"samples":52850596},{"name":"DefineProperty (writable & enumerable=false)","opsSec":107156475.7948683,"samples":53580731},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":99580157.61369406,"samples":49843613},{"name":"DefineProperties (getter)","opsSec":55156762.23952256,"samples":27578390},{"name":"DefineProperties (getter & enumerable=false)","opsSec":52558013.99913195,"samples":26284083},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":54203184.34079755,"samples":27101599}]}-->
