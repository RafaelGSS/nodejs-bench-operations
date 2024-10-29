## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|127,260,416|63630252|
|Setter|11,239,316|5620256|
|Method|88,979,985|44490008|
|DefineProperty (setter)|92,293,112|46147589|
|DefineProperty (setter & enumerable=false)|11,529,685|5764847|
|DefineProperty (setter & configurable=false)|11,223,637|5611913|
|DefineProperty (setter & enumerable=false & configurable=false)|11,416,654|5708332|
|DefineProperty (writable)|92,119,995|46060226|
|DefineProperty (writable & enumerable=false)|92,639,377|46323121|
|DefineProperty (writable & enumerable=false & configurable=false)|93,933,338|46969568|
|DefineProperties (setter)|81,451,799|40726036|
|DefineProperties (setter & enumerable=false)|11,246,614|5623516|
|DefineProperties (setter & enumerable=false & configurable=false)|10,967,791|5485817|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:02:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":127260416.95387481,"samples":63630252},{"name":"Setter","opsSec":11239316.65371661,"samples":5620256},{"name":"Method","opsSec":88979985.39088503,"samples":44490008},{"name":"DefineProperty (setter)","opsSec":92293112.84930688,"samples":46147589},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11529685.652507588,"samples":5764847},{"name":"DefineProperty (setter & configurable=false)","opsSec":11223637.285762677,"samples":5611913},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11416654.364343716,"samples":5708332},{"name":"DefineProperty (writable)","opsSec":92119995.82178068,"samples":46060226},{"name":"DefineProperty (writable & enumerable=false)","opsSec":92639377.42213303,"samples":46323121},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":93933338.43435183,"samples":46969568},{"name":"DefineProperties (setter)","opsSec":81451799.13647288,"samples":40726036},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11246614.458191624,"samples":5623516},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10967791.521982607,"samples":5485817}]}-->
