## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|587,043,708|97|
|Setter|8,405,438|97|
|Method|588,100,520|92|
|DefineProperty (setter)|588,184,522|97|
|DefineProperty (setter & enumerable=false)|8,506,936|98|
|DefineProperty (setter & configurable=false)|8,553,774|98|
|DefineProperty (setter & enumerable=false & configurable=false)|8,533,096|98|
|DefineProperty (writable)|594,576,297|95|
|DefineProperty (writable & enumerable=false)|597,021,584|96|
|DefineProperty (writable & enumerable=false & configurable=false)|595,744,671|95|
|DefineProperties (setter)|596,016,643|96|
|DefineProperties (setter & enumerable=false)|7,890,866|90|
|DefineProperties (setter & enumerable=false & configurable=false)|7,699,539|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":587043707.6220733,"samples":6},{"name":"Setter","opsSec":8405437.648224358,"samples":5},{"name":"Method","opsSec":588100519.7576557,"samples":7},{"name":"DefineProperty (setter)","opsSec":588184522.091525,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":8506935.891140498,"samples":7},{"name":"DefineProperty (setter & configurable=false)","opsSec":8553773.750538506,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":8533096.267595924,"samples":5},{"name":"DefineProperty (writable)","opsSec":594576297.3159574,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":597021584.2150002,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":595744670.8674691,"samples":7},{"name":"DefineProperties (setter)","opsSec":596016642.9194169,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":7890866.319058701,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7699538.944805528,"samples":7}]}-->
