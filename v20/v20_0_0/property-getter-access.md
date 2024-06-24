## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|15,938,292|7969147|
|Getter|13,571,051|6785526|
|Method|14,648,302|7324152|
|DefineProperty (getter)|15,963,228|7981615|
|DefineProperty (getter & enumerable=false)|13,362,968|6681485|
|DefineProperty (getter & configurable=false)|15,960,782|7980392|
|DefineProperty (getter & enumerable=false & configurable=false)|13,341,221|6670611|
|DefineProperty (writable)|15,944,174|7972088|
|DefineProperty (writable & enumerable=false)|16,000,675|8000339|
|DefineProperty (writable & enumerable=false & configurable=false)|16,014,214|8007108|
|DefineProperties (getter)|13,834,562|6917282|
|DefineProperties (getter & enumerable=false)|13,876,103|6938052|
|DefineProperties (getter & enumerable=false & configurable=false)|13,541,159|6770580|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:37:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":15938292.092348179,"samples":7969147},{"name":"Getter","opsSec":13571051.55161789,"samples":6785526},{"name":"Method","opsSec":14648302.056191327,"samples":7324152},{"name":"DefineProperty (getter)","opsSec":15963228.35090233,"samples":7981615},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13362968.139238408,"samples":6681485},{"name":"DefineProperty (getter & configurable=false)","opsSec":15960782.787253698,"samples":7980392},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13341221.933228152,"samples":6670611},{"name":"DefineProperty (writable)","opsSec":15944174.611662023,"samples":7972088},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16000675.978959532,"samples":8000339},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16014214.63870309,"samples":8007108},{"name":"DefineProperties (getter)","opsSec":13834562.41413155,"samples":6917282},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13876103.958956143,"samples":6938052},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13541159.503421878,"samples":6770580}]}-->
