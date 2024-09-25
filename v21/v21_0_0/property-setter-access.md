## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,355,174|7177588|
|Setter|5,887,130|2943566|
|Method|14,297,870|7148936|
|DefineProperty (setter)|14,361,001|7180501|
|DefineProperty (setter & enumerable=false)|5,964,775|2982388|
|DefineProperty (setter & configurable=false)|5,969,394|2984698|
|DefineProperty (setter & enumerable=false & configurable=false)|5,902,583|2951292|
|DefineProperty (writable)|14,427,826|7213914|
|DefineProperty (writable & enumerable=false)|14,491,341|7245671|
|DefineProperty (writable & enumerable=false & configurable=false)|14,395,669|7197835|
|DefineProperties (setter)|14,496,276|7248139|
|DefineProperties (setter & enumerable=false)|5,933,831|2966916|
|DefineProperties (setter & enumerable=false & configurable=false)|5,936,388|2968195|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:31:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":14355174.94227458,"samples":7177588},{"name":"Setter","opsSec":5887130.1930388855,"samples":2943566},{"name":"Method","opsSec":14297870.65125611,"samples":7148936},{"name":"DefineProperty (setter)","opsSec":14361001.083296383,"samples":7180501},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5964775.573943738,"samples":2982388},{"name":"DefineProperty (setter & configurable=false)","opsSec":5969394.898431862,"samples":2984698},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5902583.969303581,"samples":2951292},{"name":"DefineProperty (writable)","opsSec":14427826.562621454,"samples":7213914},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14491341.506420137,"samples":7245671},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14395669.228506917,"samples":7197835},{"name":"DefineProperties (setter)","opsSec":14496276.181778481,"samples":7248139},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5933831.221453311,"samples":2966916},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5936388.818938504,"samples":2968195}]}-->
