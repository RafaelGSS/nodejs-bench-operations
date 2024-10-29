## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|146,141,577|73170739|
|Setter|10,486,251|5243130|
|Method|99,845,311|49952485|
|DefineProperty (setter)|104,861,274|52430647|
|DefineProperty (setter & enumerable=false)|10,578,873|5290320|
|DefineProperty (setter & configurable=false)|10,673,234|5339226|
|DefineProperty (setter & enumerable=false & configurable=false)|10,730,318|5367627|
|DefineProperty (writable)|100,270,298|50135293|
|DefineProperty (writable & enumerable=false)|101,071,806|50535914|
|DefineProperty (writable & enumerable=false & configurable=false)|99,941,747|49970920|
|DefineProperties (setter)|98,530,602|49266486|
|DefineProperties (setter & enumerable=false)|10,388,385|5194196|
|DefineProperties (setter & enumerable=false & configurable=false)|10,520,318|5260162|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:57:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":146141577.9503175,"samples":73170739},{"name":"Setter","opsSec":10486251.275438938,"samples":5243130},{"name":"Method","opsSec":99845311.02882591,"samples":49952485},{"name":"DefineProperty (setter)","opsSec":104861274.91524798,"samples":52430647},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10578873.412771054,"samples":5290320},{"name":"DefineProperty (setter & configurable=false)","opsSec":10673234.794753507,"samples":5339226},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10730318.332555301,"samples":5367627},{"name":"DefineProperty (writable)","opsSec":100270298.82586415,"samples":50135293},{"name":"DefineProperty (writable & enumerable=false)","opsSec":101071806.16848986,"samples":50535914},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":99941747.65382516,"samples":49970920},{"name":"DefineProperties (setter)","opsSec":98530602.93018316,"samples":49266486},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10388385.76696854,"samples":5194196},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10520318.929206276,"samples":5260162}]}-->
