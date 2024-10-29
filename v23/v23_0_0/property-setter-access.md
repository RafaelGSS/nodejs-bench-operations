## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|125,302,435|62652580|
|Setter|11,285,616|5642812|
|Method|91,036,769|45519210|
|DefineProperty (setter)|97,779,388|48889712|
|DefineProperty (setter & enumerable=false)|11,022,230|5511120|
|DefineProperty (setter & configurable=false)|11,106,711|5553441|
|DefineProperty (setter & enumerable=false & configurable=false)|11,174,803|5588055|
|DefineProperty (writable)|97,842,783|48922085|
|DefineProperty (writable & enumerable=false)|98,812,004|49413692|
|DefineProperty (writable & enumerable=false & configurable=false)|97,125,839|48562955|
|DefineProperties (setter)|90,807,382|45406504|
|DefineProperties (setter & enumerable=false)|10,991,730|5495908|
|DefineProperties (setter & enumerable=false & configurable=false)|10,408,978|5204494|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:02:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":125302435.67444357,"samples":62652580},{"name":"Setter","opsSec":11285616.664349169,"samples":5642812},{"name":"Method","opsSec":91036769.13922842,"samples":45519210},{"name":"DefineProperty (setter)","opsSec":97779388.21274391,"samples":48889712},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11022230.322481776,"samples":5511120},{"name":"DefineProperty (setter & configurable=false)","opsSec":11106711.57861754,"samples":5553441},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11174803.3078996,"samples":5588055},{"name":"DefineProperty (writable)","opsSec":97842783.17639126,"samples":48922085},{"name":"DefineProperty (writable & enumerable=false)","opsSec":98812004.70196418,"samples":49413692},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":97125839.29238899,"samples":48562955},{"name":"DefineProperties (setter)","opsSec":90807382.66425872,"samples":45406504},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10991730.528303413,"samples":5495908},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10408978.382103974,"samples":5204494}]}-->
