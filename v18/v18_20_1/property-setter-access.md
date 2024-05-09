## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|16,879,882|8439942|
|Setter|6,017,553|3008777|
|Method|16,015,448|8007725|
|DefineProperty (setter)|16,317,960|8158981|
|DefineProperty (setter & enumerable=false)|6,026,933|3013467|
|DefineProperty (setter & configurable=false)|5,991,135|2995568|
|DefineProperty (setter & enumerable=false & configurable=false)|5,874,539|2937270|
|DefineProperty (writable)|16,026,196|8013099|
|DefineProperty (writable & enumerable=false)|16,023,815|8011908|
|DefineProperty (writable & enumerable=false & configurable=false)|16,010,185|8005093|
|DefineProperties (setter)|16,065,665|8032833|
|DefineProperties (setter & enumerable=false)|5,940,012|2970007|
|DefineProperties (setter & enumerable=false & configurable=false)|5,908,242|2954123|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:08:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":16879882.293621518,"samples":8439942},{"name":"Setter","opsSec":6017553.589676779,"samples":3008777},{"name":"Method","opsSec":16015448.610109497,"samples":8007725},{"name":"DefineProperty (setter)","opsSec":16317960.630542243,"samples":8158981},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6026933.169452817,"samples":3013467},{"name":"DefineProperty (setter & configurable=false)","opsSec":5991135.000121474,"samples":2995568},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5874539.57141659,"samples":2937270},{"name":"DefineProperty (writable)","opsSec":16026196.922494045,"samples":8013099},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16023815.587399462,"samples":8011908},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16010185.90075473,"samples":8005093},{"name":"DefineProperties (setter)","opsSec":16065665.685911037,"samples":8032833},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5940012.694254946,"samples":2970007},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5908242.830571563,"samples":2954123}]}-->
