## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|126,975,598|63503045|
|Setter|10,413,428|5206792|
|Method|92,306,859|46153439|
|DefineProperty (setter)|101,059,541|50530038|
|DefineProperty (setter & enumerable=false)|10,573,178|5286655|
|DefineProperty (setter & configurable=false)|10,218,109|5109056|
|DefineProperty (setter & enumerable=false & configurable=false)|10,582,046|5292341|
|DefineProperty (writable)|102,258,164|51129827|
|DefineProperty (writable & enumerable=false)|101,561,781|50784864|
|DefineProperty (writable & enumerable=false & configurable=false)|102,273,839|51143167|
|DefineProperties (setter)|94,358,561|47179284|
|DefineProperties (setter & enumerable=false)|10,049,287|5024644|
|DefineProperties (setter & enumerable=false & configurable=false)|10,045,120|5022795|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:29:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":126975598.0798771,"samples":63503045},{"name":"Setter","opsSec":10413428.694124455,"samples":5206792},{"name":"Method","opsSec":92306859.35401441,"samples":46153439},{"name":"DefineProperty (setter)","opsSec":101059541.59714402,"samples":50530038},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10573178.15246844,"samples":5286655},{"name":"DefineProperty (setter & configurable=false)","opsSec":10218109.568089923,"samples":5109056},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10582046.901008898,"samples":5292341},{"name":"DefineProperty (writable)","opsSec":102258164.30306242,"samples":51129827},{"name":"DefineProperty (writable & enumerable=false)","opsSec":101561781.39997613,"samples":50784864},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":102273839.8186324,"samples":51143167},{"name":"DefineProperties (setter)","opsSec":94358561.0174665,"samples":47179284},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10049287.5176342,"samples":5024644},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10045120.912943607,"samples":5022795}]}-->
