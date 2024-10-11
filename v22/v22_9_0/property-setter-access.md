## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|123,729,015|61908175|
|Setter|11,143,180|5571594|
|Method|87,591,882|43797531|
|DefineProperty (setter)|91,729,128|45868908|
|DefineProperty (setter & enumerable=false)|11,336,056|5668030|
|DefineProperty (setter & configurable=false)|11,426,800|5713405|
|DefineProperty (setter & enumerable=false & configurable=false)|11,351,999|5676001|
|DefineProperty (writable)|91,801,036|45900529|
|DefineProperty (writable & enumerable=false)|91,697,635|45857194|
|DefineProperty (writable & enumerable=false & configurable=false)|85,461,439|42731530|
|DefineProperties (setter)|91,635,786|45825285|
|DefineProperties (setter & enumerable=false)|11,283,759|5641881|
|DefineProperties (setter & enumerable=false & configurable=false)|11,123,529|5561767|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:00:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Setter (class)","opsSec":123729015.62686174,"samples":61908175},{"name":"Setter","opsSec":11143180.868364243,"samples":5571594},{"name":"Method","opsSec":87591882.06431353,"samples":43797531},{"name":"DefineProperty (setter)","opsSec":91729128.33425547,"samples":45868908},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11336056.440478278,"samples":5668030},{"name":"DefineProperty (setter & configurable=false)","opsSec":11426800.218659014,"samples":5713405},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11351999.45715212,"samples":5676001},{"name":"DefineProperty (writable)","opsSec":91801036.51855744,"samples":45900529},{"name":"DefineProperty (writable & enumerable=false)","opsSec":91697635.57556142,"samples":45857194},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":85461439.82202385,"samples":42731530},{"name":"DefineProperties (setter)","opsSec":91635786.0320963,"samples":45825285},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11283759.156492693,"samples":5641881},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11123529.639576381,"samples":5561767}]}-->
