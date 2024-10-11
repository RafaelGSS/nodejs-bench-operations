## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|120,914,193|60467040|
|Setter|10,922,153|5461549|
|Method|80,219,166|40110265|
|DefineProperty (setter)|82,091,910|41045961|
|DefineProperty (setter & enumerable=false)|10,820,384|5410195|
|DefineProperty (setter & configurable=false)|11,026,152|5513079|
|DefineProperty (setter & enumerable=false & configurable=false)|10,865,002|5432505|
|DefineProperty (writable)|57,544,427|28774877|
|DefineProperty (writable & enumerable=false)|82,988,435|41494464|
|DefineProperty (writable & enumerable=false & configurable=false)|82,750,662|41377334|
|DefineProperties (setter)|79,515,602|39760345|
|DefineProperties (setter & enumerable=false)|10,808,961|5404486|
|DefineProperties (setter & enumerable=false & configurable=false)|10,745,003|5372522|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:29:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":120914193.00084876,"samples":60467040},{"name":"Setter","opsSec":10922153.190060448,"samples":5461549},{"name":"Method","opsSec":80219166.75548016,"samples":40110265},{"name":"DefineProperty (setter)","opsSec":82091910.83550014,"samples":41045961},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10820384.4383224,"samples":5410195},{"name":"DefineProperty (setter & configurable=false)","opsSec":11026152.99412654,"samples":5513079},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10865002.78563815,"samples":5432505},{"name":"DefineProperty (writable)","opsSec":57544427.80285142,"samples":28774877},{"name":"DefineProperty (writable & enumerable=false)","opsSec":82988435.71259935,"samples":41494464},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":82750662.53693056,"samples":41377334},{"name":"DefineProperties (setter)","opsSec":79515602.59174618,"samples":39760345},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10808961.19103881,"samples":5404486},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10745003.147498034,"samples":5372522}]}-->
