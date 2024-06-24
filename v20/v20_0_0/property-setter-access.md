## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,714,785|7857394|
|Setter|6,388,693|3194347|
|Method|15,061,979|7530990|
|DefineProperty (setter)|15,268,147|7634074|
|DefineProperty (setter & enumerable=false)|6,452,803|3226402|
|DefineProperty (setter & configurable=false)|6,467,911|3233956|
|DefineProperty (setter & enumerable=false & configurable=false)|6,299,219|3149610|
|DefineProperty (writable)|15,347,678|7673840|
|DefineProperty (writable & enumerable=false)|15,327,340|7663671|
|DefineProperty (writable & enumerable=false & configurable=false)|15,922,220|7961111|
|DefineProperties (setter)|15,895,605|7947803|
|DefineProperties (setter & enumerable=false)|6,134,260|3067131|
|DefineProperties (setter & enumerable=false & configurable=false)|6,110,227|3055114|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:46:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15714785.575799325,"samples":7857394},{"name":"Setter","opsSec":6388693.655177489,"samples":3194347},{"name":"Method","opsSec":15061979.558356252,"samples":7530990},{"name":"DefineProperty (setter)","opsSec":15268147.584873859,"samples":7634074},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6452803.902415435,"samples":3226402},{"name":"DefineProperty (setter & configurable=false)","opsSec":6467911.840058391,"samples":3233956},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6299219.576595356,"samples":3149610},{"name":"DefineProperty (writable)","opsSec":15347678.187109157,"samples":7673840},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15327340.46906717,"samples":7663671},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15922220.295912787,"samples":7961111},{"name":"DefineProperties (setter)","opsSec":15895605.45699162,"samples":7947803},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6134260.877263176,"samples":3067131},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6110227.617762874,"samples":3055114}]}-->
