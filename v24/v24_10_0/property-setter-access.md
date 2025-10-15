## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|88,961,277|44480644|
|Setter|10,928,521|5464997|
|Method|84,650,141|42360727|
|DefineProperty (setter)|88,910,873|44455456|
|DefineProperty (setter & enumerable=false)|10,849,214|5424609|
|DefineProperty (setter & configurable=false)|10,903,222|5451612|
|DefineProperty (setter & enumerable=false & configurable=false)|11,013,723|5506865|
|DefineProperty (writable)|88,712,598|44356317|
|DefineProperty (writable & enumerable=false)|88,965,263|44482636|
|DefineProperty (writable & enumerable=false & configurable=false)|88,785,581|44392802|
|DefineProperties (setter)|88,844,126|44422569|
|DefineProperties (setter & enumerable=false)|10,797,201|5398603|
|DefineProperties (setter & enumerable=false & configurable=false)|10,779,492|5389759|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:21:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":44480644,"opsSec":88961277.32464673},{"name":"Setter","samples":5464997,"opsSec":10928521.731409388},{"name":"Method","samples":42360727,"opsSec":84650141.84240714},{"name":"DefineProperty (setter)","samples":44455456,"opsSec":88910873.5905026},{"name":"DefineProperty (setter & enumerable=false)","samples":5424609,"opsSec":10849214.332965555},{"name":"DefineProperty (setter & configurable=false)","samples":5451612,"opsSec":10903222.27729088},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5506865,"opsSec":11013723.964479268},{"name":"DefineProperty (writable)","samples":44356317,"opsSec":88712598.86981085},{"name":"DefineProperty (writable & enumerable=false)","samples":44482636,"opsSec":88965263.10347368},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":44392802,"opsSec":88785581.27089119},{"name":"DefineProperties (setter)","samples":44422569,"opsSec":88844126.42077658},{"name":"DefineProperties (setter & enumerable=false)","samples":5398603,"opsSec":10797201.745902512},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5389759,"opsSec":10779492.323249286}]}-->
