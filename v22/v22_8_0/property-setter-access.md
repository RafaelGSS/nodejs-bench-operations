## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|125,984,544|62997735|
|Setter|10,971,908|5485956|
|Method|91,948,068|45974042|
|DefineProperty (setter)|86,543,577|43273640|
|DefineProperty (setter & enumerable=false)|10,950,352|5475182|
|DefineProperty (setter & configurable=false)|10,913,928|5456967|
|DefineProperty (setter & enumerable=false & configurable=false)|10,954,093|5477050|
|DefineProperty (writable)|92,724,119|46365272|
|DefineProperty (writable & enumerable=false)|92,549,786|46274910|
|DefineProperty (writable & enumerable=false & configurable=false)|88,904,753|44455294|
|DefineProperties (setter)|91,755,912|45885190|
|DefineProperties (setter & enumerable=false)|11,080,656|5540344|
|DefineProperties (setter & enumerable=false & configurable=false)|10,818,410|5409484|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:59:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Setter (class)","opsSec":125984544.11639605,"samples":62997735},{"name":"Setter","opsSec":10971908.598708335,"samples":5485956},{"name":"Method","opsSec":91948068.36882837,"samples":45974042},{"name":"DefineProperty (setter)","opsSec":86543577.1465082,"samples":43273640},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10950352.326924419,"samples":5475182},{"name":"DefineProperty (setter & configurable=false)","opsSec":10913928.499380037,"samples":5456967},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10954093.778074736,"samples":5477050},{"name":"DefineProperty (writable)","opsSec":92724119.33121978,"samples":46365272},{"name":"DefineProperty (writable & enumerable=false)","opsSec":92549786.12677827,"samples":46274910},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":88904753.5366444,"samples":44455294},{"name":"DefineProperties (setter)","opsSec":91755912.4782559,"samples":45885190},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11080656.375806702,"samples":5540344},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10818410.246041354,"samples":5409484}]}-->
