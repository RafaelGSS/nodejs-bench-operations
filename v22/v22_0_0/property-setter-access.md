## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|128,563,023|64281933|
|Setter|11,171,953|5660244|
|Method|84,697,436|42348736|
|DefineProperty (setter)|93,108,913|46554486|
|DefineProperty (setter & enumerable=false)|11,699,396|5850475|
|DefineProperty (setter & configurable=false)|11,670,982|5836098|
|DefineProperty (setter & enumerable=false & configurable=false)|11,755,597|5878835|
|DefineProperty (writable)|88,749,737|44374894|
|DefineProperty (writable & enumerable=false)|93,641,034|46823335|
|DefineProperty (writable & enumerable=false & configurable=false)|93,535,708|46775916|
|DefineProperties (setter)|91,656,410|45829892|
|DefineProperties (setter & enumerable=false)|11,592,707|5796359|
|DefineProperties (setter & enumerable=false & configurable=false)|11,691,600|5845884|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:01:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":128563023.655069,"samples":64281933},{"name":"Setter","opsSec":11171953.834992334,"samples":5660244},{"name":"Method","opsSec":84697436.0882871,"samples":42348736},{"name":"DefineProperty (setter)","opsSec":93108913.1551669,"samples":46554486},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11699396.203190254,"samples":5850475},{"name":"DefineProperty (setter & configurable=false)","opsSec":11670982.031133048,"samples":5836098},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11755597.323613485,"samples":5878835},{"name":"DefineProperty (writable)","opsSec":88749737.9451478,"samples":44374894},{"name":"DefineProperty (writable & enumerable=false)","opsSec":93641034.3079912,"samples":46823335},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":93535708.31460074,"samples":46775916},{"name":"DefineProperties (setter)","opsSec":91656410.67746142,"samples":45829892},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11592707.960714906,"samples":5796359},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11691600.506131148,"samples":5845884}]}-->
