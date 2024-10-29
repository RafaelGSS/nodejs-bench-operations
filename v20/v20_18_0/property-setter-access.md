## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|137,161,971|68587772|
|Setter|10,527,517|5263762|
|Method|96,767,704|48384217|
|DefineProperty (setter)|101,667,890|50838182|
|DefineProperty (setter & enumerable=false)|10,746,459|5373360|
|DefineProperty (setter & configurable=false)|10,554,131|5277223|
|DefineProperty (setter & enumerable=false & configurable=false)|10,633,629|5316817|
|DefineProperty (writable)|85,477,974|42738993|
|DefineProperty (writable & enumerable=false)|99,929,469|49964753|
|DefineProperty (writable & enumerable=false & configurable=false)|102,969,485|51508148|
|DefineProperties (setter)|94,588,396|47305120|
|DefineProperties (setter & enumerable=false)|10,247,373|5124160|
|DefineProperties (setter & enumerable=false & configurable=false)|10,564,062|5282047|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:59:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":137161971.82288814,"samples":68587772},{"name":"Setter","opsSec":10527517.22027891,"samples":5263762},{"name":"Method","opsSec":96767704.56504299,"samples":48384217},{"name":"DefineProperty (setter)","opsSec":101667890.59132655,"samples":50838182},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10746459.634775968,"samples":5373360},{"name":"DefineProperty (setter & configurable=false)","opsSec":10554131.71906567,"samples":5277223},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10633629.236134103,"samples":5316817},{"name":"DefineProperty (writable)","opsSec":85477974.54595141,"samples":42738993},{"name":"DefineProperty (writable & enumerable=false)","opsSec":99929469.02609646,"samples":49964753},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":102969485.45409566,"samples":51508148},{"name":"DefineProperties (setter)","opsSec":94588396.70154971,"samples":47305120},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10247373.511592977,"samples":5124160},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10564062.033148289,"samples":5282047}]}-->
