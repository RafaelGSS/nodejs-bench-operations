## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|141,923,805|71032242|
|Getter|50,555,447|25278753|
|Method|99,155,049|49577539|
|DefineProperty (getter)|96,344,426|48778353|
|DefineProperty (getter & enumerable=false)|50,736,342|25369248|
|DefineProperty (getter & configurable=false)|98,133,221|49076133|
|DefineProperty (getter & enumerable=false & configurable=false)|50,549,975|25313257|
|DefineProperty (writable)|97,896,097|48948175|
|DefineProperty (writable & enumerable=false)|97,934,514|48969728|
|DefineProperty (writable & enumerable=false & configurable=false)|96,570,100|48290925|
|DefineProperties (getter)|50,439,531|25222695|
|DefineProperties (getter & enumerable=false)|50,756,885|25378443|
|DefineProperties (getter & enumerable=false & configurable=false)|50,027,289|25013651|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:52:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Getter (class)","opsSec":141923805.43403485,"samples":71032242},{"name":"Getter","opsSec":50555447.887716495,"samples":25278753},{"name":"Method","opsSec":99155049.24503572,"samples":49577539},{"name":"DefineProperty (getter)","opsSec":96344426.24379238,"samples":48778353},{"name":"DefineProperty (getter & enumerable=false)","opsSec":50736342.24227181,"samples":25369248},{"name":"DefineProperty (getter & configurable=false)","opsSec":98133221.08951671,"samples":49076133},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":50549975.574283324,"samples":25313257},{"name":"DefineProperty (writable)","opsSec":97896097.23227695,"samples":48948175},{"name":"DefineProperty (writable & enumerable=false)","opsSec":97934514.61613052,"samples":48969728},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":96570100.12277786,"samples":48290925},{"name":"DefineProperties (getter)","opsSec":50439531.75102431,"samples":25222695},{"name":"DefineProperties (getter & enumerable=false)","opsSec":50756885.79697245,"samples":25378443},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":50027289.793341294,"samples":25013651}]}-->
