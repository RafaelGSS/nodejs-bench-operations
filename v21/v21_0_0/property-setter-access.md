## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|761,848,769|91|
|Setter|12,474,309|93|
|Method|782,228,756|97|
|DefineProperty (setter)|784,186,215|100|
|DefineProperty (setter & enumerable=false)|12,449,589|96|
|DefineProperty (setter & configurable=false)|12,402,231|95|
|DefineProperty (setter & enumerable=false & configurable=false)|12,431,155|95|
|DefineProperty (writable)|785,118,532|99|
|DefineProperty (writable & enumerable=false)|757,601,898|99|
|DefineProperty (writable & enumerable=false & configurable=false)|189,947,356|26|
|DefineProperties (setter)|110,434,043|82|
|DefineProperties (setter & enumerable=false)|11,218,098|95|
|DefineProperties (setter & enumerable=false & configurable=false)|11,239,974|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:10:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Setter (class)","opsSec":761848768.7329481,"samples":5},{"name":"Setter","opsSec":12474308.766126383,"samples":5},{"name":"Method","opsSec":782228756.0747968,"samples":8},{"name":"DefineProperty (setter)","opsSec":784186214.6581216,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12449589.223660883,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":12402230.750361566,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12431154.63349346,"samples":5},{"name":"DefineProperty (writable)","opsSec":785118532.1526872,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":757601897.9857697,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":189947356.4580935,"samples":8},{"name":"DefineProperties (setter)","opsSec":110434043.14230964,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11218097.76486374,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11239973.585293572,"samples":4}]}-->
