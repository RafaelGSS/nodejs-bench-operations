## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|136,142,803|68091200|
|Setter|10,341,679|5170895|
|Method|96,024,461|48054066|
|DefineProperty (setter)|100,408,338|50204227|
|DefineProperty (setter & enumerable=false)|10,465,713|5234087|
|DefineProperty (setter & configurable=false)|10,368,446|5184226|
|DefineProperty (setter & enumerable=false & configurable=false)|10,393,520|5197371|
|DefineProperty (writable)|100,554,897|50293160|
|DefineProperty (writable & enumerable=false)|101,668,137|50834088|
|DefineProperty (writable & enumerable=false & configurable=false)|83,982,667|42000401|
|DefineProperties (setter)|94,435,574|47217791|
|DefineProperties (setter & enumerable=false)|10,225,511|5112758|
|DefineProperties (setter & enumerable=false & configurable=false)|10,223,619|5111919|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:57:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Setter (class)","opsSec":136142803.41019937,"samples":68091200},{"name":"Setter","opsSec":10341679.923158897,"samples":5170895},{"name":"Method","opsSec":96024461.66147803,"samples":48054066},{"name":"DefineProperty (setter)","opsSec":100408338.93204358,"samples":50204227},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10465713.531680128,"samples":5234087},{"name":"DefineProperty (setter & configurable=false)","opsSec":10368446.235143892,"samples":5184226},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10393520.740525948,"samples":5197371},{"name":"DefineProperty (writable)","opsSec":100554897.399002,"samples":50293160},{"name":"DefineProperty (writable & enumerable=false)","opsSec":101668137.97611639,"samples":50834088},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":83982667.11879304,"samples":42000401},{"name":"DefineProperties (setter)","opsSec":94435574.06741177,"samples":47217791},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10225511.05085265,"samples":5112758},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10223619.337229615,"samples":5111919}]}-->
