## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,951,061|7975531|
|Setter|6,807,661|3403831|
|Method|15,960,035|7980018|
|DefineProperty (setter)|16,022,538|8011270|
|DefineProperty (setter & enumerable=false)|6,546,656|3273329|
|DefineProperty (setter & configurable=false)|6,636,062|3318032|
|DefineProperty (setter & enumerable=false & configurable=false)|6,621,431|3310716|
|DefineProperty (writable)|15,656,616|7828309|
|DefineProperty (writable & enumerable=false)|15,615,022|7807512|
|DefineProperty (writable & enumerable=false & configurable=false)|15,554,009|7777005|
|DefineProperties (setter)|15,708,212|7854107|
|DefineProperties (setter & enumerable=false)|6,747,730|3373866|
|DefineProperties (setter & enumerable=false & configurable=false)|6,749,445|3374723|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:51:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15951061.74479446,"samples":7975531},{"name":"Setter","opsSec":6807661.727690739,"samples":3403831},{"name":"Method","opsSec":15960035.96805611,"samples":7980018},{"name":"DefineProperty (setter)","opsSec":16022538.013177624,"samples":8011270},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6546656.363353027,"samples":3273329},{"name":"DefineProperty (setter & configurable=false)","opsSec":6636062.832051194,"samples":3318032},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6621431.417330314,"samples":3310716},{"name":"DefineProperty (writable)","opsSec":15656616.4343548,"samples":7828309},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15615022.469683426,"samples":7807512},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15554009.066723151,"samples":7777005},{"name":"DefineProperties (setter)","opsSec":15708212.554805325,"samples":7854107},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6747730.852892044,"samples":3373866},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6749445.01456606,"samples":3374723}]}-->
