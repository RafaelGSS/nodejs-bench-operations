## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|16,986,653|8493366|
|Setter|6,059,891|3029946|
|Method|16,561,927|8280964|
|DefineProperty (setter)|16,527,850|8263926|
|DefineProperty (setter & enumerable=false)|6,102,651|3051326|
|DefineProperty (setter & configurable=false)|6,194,776|3097389|
|DefineProperty (setter & enumerable=false & configurable=false)|5,883,192|2941597|
|DefineProperty (writable)|16,611,820|8305911|
|DefineProperty (writable & enumerable=false)|16,568,979|8284490|
|DefineProperty (writable & enumerable=false & configurable=false)|16,591,969|8295985|
|DefineProperties (setter)|16,544,397|8272199|
|DefineProperties (setter & enumerable=false)|5,895,022|2947512|
|DefineProperties (setter & enumerable=false & configurable=false)|6,054,264|3027133|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:44:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":16986653.330479853,"samples":8493366},{"name":"Setter","opsSec":6059891.394971321,"samples":3029946},{"name":"Method","opsSec":16561927.850845112,"samples":8280964},{"name":"DefineProperty (setter)","opsSec":16527850.662892472,"samples":8263926},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6102651.0988297835,"samples":3051326},{"name":"DefineProperty (setter & configurable=false)","opsSec":6194776.587401334,"samples":3097389},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5883192.393425588,"samples":2941597},{"name":"DefineProperty (writable)","opsSec":16611820.089862075,"samples":8305911},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16568979.520001302,"samples":8284490},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16591969.357795114,"samples":8295985},{"name":"DefineProperties (setter)","opsSec":16544397.233566776,"samples":8272199},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5895022.892204902,"samples":2947512},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6054264.598230432,"samples":3027133}]}-->
