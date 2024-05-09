## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|16,839,349|8419675|
|Setter|6,131,888|3065945|
|Method|16,209,950|8104976|
|DefineProperty (setter)|16,014,376|8007189|
|DefineProperty (setter & enumerable=false)|6,160,452|3080227|
|DefineProperty (setter & configurable=false)|6,245,057|3122530|
|DefineProperty (setter & enumerable=false & configurable=false)|5,896,263|2948132|
|DefineProperty (writable)|15,535,315|7767658|
|DefineProperty (writable & enumerable=false)|15,533,474|7766738|
|DefineProperty (writable & enumerable=false & configurable=false)|15,571,324|7785663|
|DefineProperties (setter)|16,767,062|8383532|
|DefineProperties (setter & enumerable=false)|6,242,392|3121197|
|DefineProperties (setter & enumerable=false & configurable=false)|6,165,505|3082753|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:07:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":16839349.735022288,"samples":8419675},{"name":"Setter","opsSec":6131888.684239431,"samples":3065945},{"name":"Method","opsSec":16209950.941057548,"samples":8104976},{"name":"DefineProperty (setter)","opsSec":16014376.80874501,"samples":8007189},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6160452.105291553,"samples":3080227},{"name":"DefineProperty (setter & configurable=false)","opsSec":6245057.784460548,"samples":3122530},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5896263.350530227,"samples":2948132},{"name":"DefineProperty (writable)","opsSec":15535315.059207434,"samples":7767658},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15533474.726006674,"samples":7766738},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15571324.826852169,"samples":7785663},{"name":"DefineProperties (setter)","opsSec":16767062.608842423,"samples":8383532},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6242392.508721043,"samples":3121197},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6165505.223855315,"samples":3082753}]}-->
