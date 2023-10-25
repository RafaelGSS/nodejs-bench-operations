## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|478,639,430|96|
|Setter|8,424,897|95|
|Method|478,971,909|90|
|DefineProperty (setter)|481,229,632|93|
|DefineProperty (setter & enumerable=false)|8,538,887|94|
|DefineProperty (setter & configurable=false)|8,564,685|96|
|DefineProperty (setter & enumerable=false & configurable=false)|8,488,411|97|
|DefineProperty (writable)|482,632,603|97|
|DefineProperty (writable & enumerable=false)|482,178,287|98|
|DefineProperty (writable & enumerable=false & configurable=false)|465,087,115|92|
|DefineProperties (setter)|528,069,718|73|
|DefineProperties (setter & enumerable=false)|8,581,982|98|
|DefineProperties (setter & enumerable=false & configurable=false)|8,192,175|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":478639429.7115703,"samples":6},{"name":"Setter","opsSec":8424896.517390616,"samples":6},{"name":"Method","opsSec":478971908.8113755,"samples":6},{"name":"DefineProperty (setter)","opsSec":481229632.49392205,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":8538887.218901835,"samples":7},{"name":"DefineProperty (setter & configurable=false)","opsSec":8564684.677992905,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":8488410.935214823,"samples":4},{"name":"DefineProperty (writable)","opsSec":482632603.0919815,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":482178287.42481714,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":465087115.38313085,"samples":6},{"name":"DefineProperties (setter)","opsSec":528069717.56123173,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":8581982.35606329,"samples":4},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":8192174.922956094,"samples":5}]}-->
