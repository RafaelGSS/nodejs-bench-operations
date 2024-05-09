## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,930,463|7965232|
|Setter|6,656,300|3328151|
|Method|15,729,418|7864710|
|DefineProperty (setter)|15,768,446|7884224|
|DefineProperty (setter & enumerable=false)|6,666,490|3333246|
|DefineProperty (setter & configurable=false)|6,705,279|3352722|
|DefineProperty (setter & enumerable=false & configurable=false)|6,687,678|3343840|
|DefineProperty (writable)|15,885,538|7942770|
|DefineProperty (writable & enumerable=false)|15,889,068|7944535|
|DefineProperty (writable & enumerable=false & configurable=false)|15,897,293|7948647|
|DefineProperties (setter)|15,890,512|7945257|
|DefineProperties (setter & enumerable=false)|6,572,880|3286441|
|DefineProperties (setter & enumerable=false & configurable=false)|6,705,889|3352945|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:16:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15930463.745087646,"samples":7965232},{"name":"Setter","opsSec":6656300.429100301,"samples":3328151},{"name":"Method","opsSec":15729418.14391029,"samples":7864710},{"name":"DefineProperty (setter)","opsSec":15768446.643842226,"samples":7884224},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6666490.573363137,"samples":3333246},{"name":"DefineProperty (setter & configurable=false)","opsSec":6705279.84133487,"samples":3352722},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6687678.087319965,"samples":3343840},{"name":"DefineProperty (writable)","opsSec":15885538.983368967,"samples":7942770},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15889068.570054213,"samples":7944535},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15897293.014426721,"samples":7948647},{"name":"DefineProperties (setter)","opsSec":15890512.31549448,"samples":7945257},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6572880.501377,"samples":3286441},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6705889.383101002,"samples":3352945}]}-->
