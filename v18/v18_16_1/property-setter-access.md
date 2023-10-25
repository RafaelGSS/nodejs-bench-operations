## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|473,743,414|96|
|Setter|7,511,648|99|
|Method|475,904,953|97|
|DefineProperty (setter)|475,635,672|95|
|DefineProperty (setter & enumerable=false)|7,421,817|98|
|DefineProperty (setter & configurable=false)|7,439,984|99|
|DefineProperty (setter & enumerable=false & configurable=false)|7,417,731|98|
|DefineProperty (writable)|708,028,771|92|
|DefineProperty (writable & enumerable=false)|708,561,444|95|
|DefineProperty (writable & enumerable=false & configurable=false)|708,119,467|99|
|DefineProperties (setter)|307,856,261|45|
|DefineProperties (setter & enumerable=false)|6,799,864|97|
|DefineProperties (setter & enumerable=false & configurable=false)|6,769,192|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":473743413.9514346,"samples":7},{"name":"Setter","opsSec":7511647.676952753,"samples":6},{"name":"Method","opsSec":475904952.6214233,"samples":10},{"name":"DefineProperty (setter)","opsSec":475635671.7319749,"samples":10},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7421816.878246935,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":7439983.725434065,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7417731.077410906,"samples":8},{"name":"DefineProperty (writable)","opsSec":708028771.2213888,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":708561443.9119787,"samples":9},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":708119466.8636388,"samples":8},{"name":"DefineProperties (setter)","opsSec":307856261.1910923,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6799863.671806135,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6769191.882478211,"samples":5}]}-->
