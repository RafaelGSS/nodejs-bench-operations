## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|142,313,880|71156982|
|Setter|11,325,090|5662550|
|Method|93,340,326|46684329|
|DefineProperty (setter)|99,974,733|49987448|
|DefineProperty (setter & enumerable=false)|11,696,351|5851173|
|DefineProperty (setter & configurable=false)|11,509,578|5754793|
|DefineProperty (setter & enumerable=false & configurable=false)|11,711,929|5855967|
|DefineProperty (writable)|98,981,158|49495219|
|DefineProperty (writable & enumerable=false)|99,368,868|49700904|
|DefineProperty (writable & enumerable=false & configurable=false)|99,417,864|49714778|
|DefineProperties (setter)|96,410,659|48210427|
|DefineProperties (setter & enumerable=false)|11,352,534|5676278|
|DefineProperties (setter & enumerable=false & configurable=false)|11,416,136|5708128|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:01:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":142313880.60406595,"samples":71156982},{"name":"Setter","opsSec":11325090.96257741,"samples":5662550},{"name":"Method","opsSec":93340326.59734856,"samples":46684329},{"name":"DefineProperty (setter)","opsSec":99974733.04118514,"samples":49987448},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11696351.058657588,"samples":5851173},{"name":"DefineProperty (setter & configurable=false)","opsSec":11509578.12744856,"samples":5754793},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11711929.479195222,"samples":5855967},{"name":"DefineProperty (writable)","opsSec":98981158.71433285,"samples":49495219},{"name":"DefineProperty (writable & enumerable=false)","opsSec":99368868.21387579,"samples":49700904},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":99417864.4591396,"samples":49714778},{"name":"DefineProperties (setter)","opsSec":96410659.1512587,"samples":48210427},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11352534.56641474,"samples":5676278},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11416136.107738595,"samples":5708128}]}-->
